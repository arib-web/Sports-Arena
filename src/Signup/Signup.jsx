import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import login from "../assets/undraw_innovative_re_rr5i.svg"
import { Roll } from "react-awesome-reveal";

const Signup = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    // Perform signup logic here
    console.log(data);
  };

  return (
    <div className="flex items-center justify-center h-screen bg-blue-200">
      <div className="relative w-full lg:max-w-4xl">
        <img src={login} alt="" className="w-full h-auto" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-md bg-white rounded-lg shadow-md p-6">
          <Roll><form >
            <h2 className="mb-4 text-2xl font-bold">Signup</h2>
            <div className="mb-4">
              <label htmlFor="name" className="block mb-1 font-medium">
                Name
              </label>
              <input
                type="text"
                id="name"
                {...register("name", { required: "Name is required" })}
                className="w-full px-3 py-2 border border-gray-300 rounded"
              />
              {errors.name && (
                <span className="text-red-500">{errors.name.message}</span>
              )}
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block mb-1 font-medium">
                Email
              </label>
              <input
                type="email"
                id="email"
                {...register("email", {
                  required: "Email is required",
                  
                })}
                className="w-full px-3 py-2 border border-gray-300 rounded"
              />
              {errors.email && (
                <span className="text-red-500">{errors.email.message}</span>
              )}
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="block mb-1 font-medium">
                Password
              </label>
              <input
                type="password"
                id="password"
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 6,
                    message: "Password must have at least 6 characters",
                    minLength: 6,
                    maxLength: 20,
                    pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/,
                  },
                })}
                className="w-full px-3 py-2 border border-gray-300 rounded"
              />
              {errors.password && (
                <span className="text-red-500">{errors.password.message}</span>
              )}
              {errors.password?.type === "minLength" && (
                  <p className="text-red-600">Password must be 6 characters</p>
                )}
                {errors.password?.type === "maxLength" && (
                  <p className="text-red-600">
                    Password must be less than 20 characters
                  </p>
                )}
                {errors.password?.type === "pattern" && (
                  <p className="text-red-600">
                    Password must have one Uppercase one lower case, one number
                    and one special character.
                  </p>
                )}
            </div>
            <div className="mb-4">
              <label htmlFor="photoUrl" className="block mb-1 font-medium">
                Photo URL
              </label>
              <input
                type="text"
                id="photoUrl"
                {...register("photoUrl")}
                className="w-full px-3 py-2 border border-gray-300 rounded"
              />
            </div>
            <button
              type="submit"
              onClick={handleSubmit(onSubmit)}
              className="w-full px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600"
            >
              Sign Up
            </button>
            <p className="mt-2 text-center">
              Already have an account?{" "}
              <Link to="/login" className="text-blue-500 hover:underline">
                Log in here
              </Link>
            </p>
          </form></Roll>
        </div>
      </div>
    </div>
  );
};

export default Signup;
