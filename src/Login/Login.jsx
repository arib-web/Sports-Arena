import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { FaEye } from 'react-icons/fa';

const Login = () => {
  const { handleSubmit, register, formState: { errors } } = useForm();
  const [showPassword, setShowPassword] = useState(false);

  const onSubmit = (data) => {
    // Perform login logic here
    console.log(data);
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <form className="w-full max-w-md p-6 bg-white rounded-lg shadow-md">
        <h2 className="mb-4 text-2xl font-bold">Login</h2>
        <div className="mb-4">
          <label htmlFor="email" className="block mb-1 font-medium">Email</label>
          <input
            type="email"
            id="email"
            {...register('email', { required: 'Email is required' })}
            className="w-full px-3 py-2 border border-gray-300 rounded"
          />
          {errors.email && <span className="text-red-500">{errors.email.message}</span>}
        </div>
        <div className="mb-4 relative">
          <label htmlFor="password" className="block mb-1 font-medium">Password</label>
          <div className="flex">
            <input
              type={showPassword ? 'text' : 'password'}
              id="password"
              {...register('password', { required: 'Password is required' })}
              className="w-full px-3 py-2 border border-gray-300 rounded pr-10"
            />
            <button
              type="button"
              className="absolute top-12 right-0 transform -translate-y-1/2 h-full flex items-center justify-center w-10 text-gray-500"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M9.9998 4.832c1.5586 0 3.1218.6063 4.3023 1.7867 2.375 2.3765 2.375 6.2277 0 8.6042-1.1805 1.1805-2.7437 1.7867-4.3023 1.7867s-3.1218-.6063-4.3023-1.7867c-2.375-2.3765-2.375-6.2277 0-8.6042C6.878 5.4383 8.4412 4.832 9.9998 4.832zm0 1.44c-1.1605 0-2.2738.4535-3.1054 1.285-1.71 1.7094-1.71 4.4832 0 6.1926C7.726 14.223 8.8393 14.6765 9.9998 14.6765s2.2738-.4535 3.1054-1.285c1.71-1.7094 1.71-4.4832 0-6.1926-.8317-.8315-1.9449-1.285-3.1054-1.285zm-.1076 1.78c-.1041 0-.2034.041-.277.115-.1527.152-.1527.3996 0 .5515.1564.1563.409.1563.5653 0 .074-.074.115-.1733.115-.277 0-.1527-.152-.1527-.3985 0-.153.074-.2773.195-.2773.348v.0001c0 .1554-.1264.282-.2817.282z" />
                </svg>
              ) : (
                <FaEye />
              )}
            </button>
          </div>
          {errors.password && <span className="text-red-500">{errors.password.message}</span>}
        </div>
        <button
          type="submit"
          onClick={handleSubmit(onSubmit)}
          className="w-full px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600"
        >
          Log In
        </button>
        <p className="mt-2 text-center">
          Don't have an account?{' '}
          <Link to="/signup" className="text-blue-500 hover:underline">Register here</Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
