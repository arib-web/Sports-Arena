import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import login from "../assets/undraw_innovative_re_rr5i.svg";
import { Roll } from "react-awesome-reveal";

const Login = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();
  const [showPassword, setShowPassword] = useState(false);

  const onSubmit = (data) => {
    // Perform login logic here
    console.log(data);
  };

  return (
    <div className="flex items-center justify-center h-screen bg-blue-200">
      <div className="relative w-full max-w-4xl">
        <img src={login} alt="" className="w-full h-auto" />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-md bg-white rounded-lg shadow-md p-6">
        <Roll triggerOnce={1}>
            <form>
              <h2 className="mb-4 text-2xl font-bold">Login</h2>
              <div className="mb-4">
                <label htmlFor="email" className="block mb-1 font-medium">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  {...register("email", { required: "Email is required" })}
                  className="w-full px-3 py-2 border border-gray-300 rounded"
                />
                {errors.email && (
                  <span className="text-red-500">{errors.email.message}</span>
                )}
              </div>
              <div className="mb-4 relative">
                <label htmlFor="password" className="block mb-1 font-medium">
                  Password
                </label>
                <div className="flex">
                  <input
                    type={showPassword ? "text" : "password"}
                    id="password"
                    {...register("password", {
                      required: "Password is required",
                    })}
                    className="w-full px-3 py-2 border border-gray-300 rounded pr-10"
                  />
                  <button
                    type="button"
                    title="show password"
                    className="absolute top-12 right-0 transform -translate-y-1/2 h-full flex items-center justify-center w-10 text-gray-500"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <FaEye></FaEye> : <FaEyeSlash />}
                  </button>
                </div>
                {errors.password && (
                  <span className="text-red-500">
                    {errors.password.message}
                  </span>
                )}
              </div>
              <button
                type="submit"
                onClick={handleSubmit(onSubmit)}
                className="w-full px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600"
              >
                Log In
              </button>
              <p className="mt-2 text-center">
                Don't have an account?{" "}
                <Link to="/signup" className="text-blue-500 hover:underline">
                  Register here
                </Link>
              </p>
            </form>
        </Roll>
          </div>
      </div>
    </div>
  );
};

export default Login;
