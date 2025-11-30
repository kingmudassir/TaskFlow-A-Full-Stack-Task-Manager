import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

function Login() {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log("Signup Data:", data);
    // Here you can call Appwrite signup API or other backend logic
    alert("Signup submitted!");
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md p-10">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">Login</h2>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">

          {/* Email */}
          <div className="flex flex-col">
            <label htmlFor="email" className="font-semibold text-gray-700 mb-2">Email</label>
            <input
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
                  message: "Enter a valid email address"
                }
              })}
              id="email"
              type="email"
              placeholder="you@example.com"
              className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-teal-400 transition-all"
            />
            {errors.email && <span className="text-red-500 text-sm mt-1">{errors.email.message}</span>}
          </div>

          {/* Password */}
          <div className="flex flex-col">
            <label htmlFor="password" className="font-semibold text-gray-700 mb-2">Password</label>
            <input
              {...register("password", { required: "Password is required"})}
              id="password"
              type="password"
              placeholder="Enter password"
              className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-teal-400 transition-all"
            />
            {errors.password && <span className="text-red-500 text-sm mt-1">{errors.password.message}</span>}
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-teal-400 hover:bg-cyan-400 text-white font-semibold px-6 py-3 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg"
          >
            Login
          </button>
        </form>

        <p className="text-gray-500 text-center mt-6">
          Don't have an account?{' '}
          <Link to="/login" className="text-teal-500 hover:text-cyan-500 font-semibold">
            Signup
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
