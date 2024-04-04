/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-key */

import { useForm } from "react-hook-form";
import { useAuth } from "../context/AuthContext";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

function RegisterPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { signup, errors: registerErrors, isAuthenticated } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) navigate("/tasks");
  }, [isAuthenticated]);

  const onSubmit = handleSubmit(async (values) => {
    signup(values);
  });

  return (

    //div register
    <div className="flex h-[calc(100vh-100px)] items-center justify-center">
      
    <div className=" bg-zinc-800 max-w-md p-10 rounded-md">
      {registerErrors.map((error, i) => (
        <div className="bg-red-500 p-2 text-white" key={i}>
          {error}
        </div>
      ))}
      <form onSubmit={onSubmit}>
      <h1 className="text-2xl font-bold my-2 text-white">Register</h1>
        <input
          type="text"
          {...register("username", { required: true })}
          className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-1"
          placeholder="username"
        />
        {errors.username && (
          <p className="text-red-500">Username is required</p>
        )}

        <input
          type="email"
          {...register("email", { required: true })}
          className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-1"
          placeholder="email"
        />
        {errors.email && <p className="text-red-500">Email is required</p>}

        <input
          type="password"
          {...register("password", { required: true })}
          className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-1"
          placeholder="password"
        />
        {errors.password && (
          <p className="text-red-500">Password is required</p>
        )}

        <button className="w-full bg-red-700 hover:bg-red-600 text-white rounded-md text-lg font-bold my-2 py-3">Register</button>
      </form>

      <p className="flex gap-x-2 justify-between text-white">
        Already have an account?{" "}
        <Link to="/login" className="text-white">
          Login
        </Link>
      </p>
    </div>
    </div>
  );
}

export default RegisterPage;
