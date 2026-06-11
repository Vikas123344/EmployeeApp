import { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { login } from '../../services/authApi';
import { useGlobalContext } from '../../context/GlobalProvider'; 
import { logo } from '../../assets';
import { generateUniqueNumber, getYupSchema } from '../../utils/commonfunctions';
import { formConfig } from '../../components/forms/formConfig';

export default function Login() {
  const navigate = useNavigate();
  const [loginError, setLoginError] = useState('');
  const [loading, setLoading] = useState(false); 
  const { setUserDetails } = useGlobalContext();
  
  useEffect(() => {
    let timer;
    if (loginError) {
      timer = setTimeout(() => setLoginError(''), 5000);
    }
    return () => clearTimeout(timer);
  }, [loginError]);

  const schema = getYupSchema(formConfig.login.fields);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    setLoading(true);
    try {
      const fakeAuthToken = "dummyToken123";
      localStorage.setItem("authToken", fakeAuthToken);
      setUserDetails({ id: 1, name: "Rama Krish" });
      navigate("/dashboard");
    } catch (error) {
      setLoginError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-md">
        
        {/* Header */}
        <div className="text-center">
          <img src={logo} alt="Vcube Logo" className="mx-auto w-40" />
          <h2 className="mt-3 text-2xl font-semibold">Log in</h2>
          <p className="text-gray-500 text-sm">
            Welcome back! Please enter the details
          </p>
        </div>

        {/* Error */}
        {loginError && (
          <div className="mt-4 bg-red-100 text-red-700 px-4 py-2 rounded text-sm">
            {loginError}
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit(onSubmit)} className="mt-4 space-y-4">
          {formConfig.login.fields.map((field) => (
            <div key={field.name}>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                {field.label}
              </label>

              <Controller
                name={field.name}
                control={control}
                render={({ field: controllerField }) => (
                  <input
                    {...controllerField}
                    type={field.type}
                    placeholder={field.placeholder}
                    className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 
                      ${
                        errors[field.name]
                          ? 'border-red-500 focus:ring-red-300'
                          : 'border-gray-300 focus:ring-blue-300'
                      }`}
                  />
                )}
              />

              {errors[field.name] && (
                <p className="mt-1 text-xs text-red-500">
                  {errors[field.name]?.message}
                </p>
              )}
            </div>
          ))}

          {/* Actions */}
          <div className="flex items-center justify-between">
            <Link
              to="/forgot-password"
              className="text-sm text-blue-600 hover:underline"
            >
              Forgot Password?
            </Link>

            <button
              type="submit"
              disabled={loading}
              className="flex items-center justify-center bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 disabled:opacity-50"
            >
              {loading && (
                <span className="mr-2 h-4 w-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
              )}
              Login
            </button>
          </div>
        </form>

        {/* Footer */}
        <footer className="mt-6 text-center text-gray-400 text-xs">
          © 2025 VVcube Software Solutions
        </footer>
      </div>
    </div>
  );
}
