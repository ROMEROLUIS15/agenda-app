import { useForm } from "react-hook-form";
import { useAuth } from "../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";

function LoginPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const {signin, errors: signinErrors, isAuthenticated } = useAuth();
  const navigate = useNavigate()

  const onSubmit = handleSubmit((data) => {
    signin(data);
  });


useEffect(() => {
  if (isAuthenticated) navigate("/tasks")
}, [isAuthenticated])


  return (
    <div className="flex h-[calc(100vh-100px)] items-center justify-center">
      <div className="bg-zinc-800 max-w-md w-full p-10  rounded-md">
      {
        signinErrors.map((error, i) => (
          <div className="bg-red-500 p-2 text-white text-center my-2" key={i}>
            {error}
          </div>
        ))
      }

      <h1 className="text-2xl font-bold my-2 text-white">Login</h1>

      <form onSubmit={onSubmit}>
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

        <button className="w-full bg-red-700 hover:bg-red-600 text-white rounded-md text-lg font-bold my-2 py-3">Login</button>
      </form>

          <p className="flex gap-x-2 justify-between text-white">
            Do not have an account? <Link to="/register"
            className="text-white">Sign up</Link>
          </p>


      </div>
    </div>
  );
}

export default LoginPage;
