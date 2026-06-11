import React, { useState } from 'react';
import CustomDataTable from '../../components/core/CustomDataTable/CustomDataTable';
import { taskHeaders, tasksData } from '../../data/tasksMockData';
import { useGlobalContext } from '../../context/GlobalProvider';
import { MdAddTask } from 'react-icons/md';

import AddUser from '../../components/forms/AddUser';
import AddTask from '../../components/forms/AddTask';
import ViewTask from '../../components/forms/ViewTask';

const AllTasks = () => {
  const { showToast, openModal, closeModal } = useGlobalContext();
  const [latestTasks, setLatestTasks] = useState(tasksData);

  const handleEditCraneSubmit = () => {
    showToast('Updated Successful!', 'User details are updated successfully!');
    closeModal();
  };

  const handleAddUser = () => {
    openModal(
      'Add User',
      <AddUser
        type="add"
        data={null}
        onSubmit={handleEditCraneSubmit}
        closeModal={closeModal}
      />,
      'lg'
    );
  };

  const handleAddNewTask = (newTask) => {
    setLatestTasks((prev) => [...prev, newTask]);
    closeModal();
  };

  const handleAddTask = () => {
    openModal(
      'Add New Task',
      <AddTask
        type="add"
        data={null}
        onSubmit={handleAddNewTask}
        closeModal={closeModal}
      />,
      'md'
    );
  };

  const handleAddCommentToTask = (updatedTask) => {
    setLatestTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === updatedTask.id ? updatedTask : task
      )
    );
  };

  const handleRowClick = (type, singleTask) => {
    if (type === 'next') {
      openModal(
        'View Task',
        <ViewTask
          type="view"
          task={singleTask}
          onSubmit={handleAddCommentToTask}
          closeModal={closeModal}
        />,
        'lg'
      );
    }
  };

  const actionButtons = [
    <button
      key="add"
      onClick={handleAddTask}
      className="flex items-center gap-2 rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700 transition"
    >
      <MdAddTask className="text-lg" />
      Add Task
    </button>
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="p-4">
        <CustomDataTable
          displayType="tasks"
          cardClass="my-custom-card-class"
          tableClass="my-custom-table-class"
          headerStyles="my-header-styles"
          headerText="View All Tasks / Followups"
          headers={taskHeaders}
          rows={latestTasks}
          actionButtons={actionButtons}
          handleActionClick={handleRowClick}
        />
      </div>
    </div>
  );
};

export default AllTasks;
