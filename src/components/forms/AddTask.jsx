import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { getYupSchema } from '../../utils/commonfunctions';
import { formConfig } from '../../components/forms/formConfig';
import CustomButtons from '../../components/core/CustomButtons';
import CustomInputFields from '../../components/core/CustomInputFields';
import { useGlobalContext } from '../../context/GlobalProvider';
import { v4 as uuidv4 } from 'uuid';
import { addTaskApi } from '../../services/tasks';

const colSpanMap = {
  3: 'sm:col-span-3',
  4: 'sm:col-span-4',
  6: 'sm:col-span-6',
  12: 'sm:col-span-12',
};

const AddTask = ({ type, data, onSubmit, closeModal }) => {
  const [addTaskError, setAddTaskError] = useState('');
  const { showToast } = useGlobalContext();

  const formFields = formConfig['tasks'].fields.map(field => ({
    ...field,
    required: field.required,
  }));

  const schema = getYupSchema(formFields);

  const {
    control,
    handleSubmit,
    setValue,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: formFields.reduce((acc, field) => {
      acc[field.name] = '';
      return acc;
    }, {}),
  });

  useEffect(() => {
    let timer;
    if (addTaskError) {
      timer = setTimeout(() => setAddTaskError(''), 5000);
    }
    return () => clearTimeout(timer);
  }, [addTaskError]);

  useEffect(() => {
    if (type === 'edit' && data) {
      formFields.forEach(field => {
        setValue(field.name, data[field.name]);
      });
    }
  }, [type, data, setValue]);

  const handleFormSubmit = async (formData) => {
    const uuid = uuidv4();
    const numbers = uuid.replace(/\D/g, '');
    formData.id = numbers.slice(0, 4);
    formData.status = 'New';

    try {
      await addTaskApi(formData);
      showToast('Add Successful!', 'Task details are added successfully!');
      onSubmit(formData);
      closeModal();
    } catch (error) {
      setAddTaskError(error.message || 'An unexpected error occurred. Please try again.');
    }
  };

  return (
    <div className="w-full">
      <form onSubmit={handleSubmit(handleFormSubmit)}>
        
        {/* Form Fields */}
        <div className="grid grid-cols-12 gap-4 mb-6">
          {formFields.map(field => (
            <div
              key={field.name}
              className={`col-span-12 ${colSpanMap[field.colSize] || 'sm:col-span-6'}`}
            >
              <CustomInputFields
                control={control}
                field={field}
                errors={errors}
              />
            </div>
          ))}
        </div>

        {/* Error Alert */}
        {addTaskError && (
          <div className="text-center text-red-700 bg-red-100 border border-red-300 rounded-md py-2 px-4 mb-4">
            {addTaskError}
          </div>
        )}

        {/* Buttons */}
        <div className="flex justify-end gap-3 mt-4">
          <CustomButtons
            isShowPrimary={false}
            isShowSecondary={true}
            secondaryText="Cancel"
            onSecondaryClick={closeModal}
          />
          <CustomButtons
            isShowPrimary={true}
            primaryText={type === 'edit' ? 'Update' : 'Create Task'}
            onPrimaryClick={handleSubmit(handleFormSubmit)}
          />
        </div>
      </form>
    </div>
  );
};

export default AddTask;
