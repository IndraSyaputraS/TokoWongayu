"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors({}); // Reset errors

    const response = await fetch("/api/logins", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
      credentials: "include",
    });

    if (response.ok) {
      router.push("/dashboard");
    } else {
      const data = await response.json();
      if (typeof data.error === "object" && data.error !== null) {
        setErrors(data.error);
      } else {
        setErrors({ general: data.error || "Unknown error" });
      }
    }
  };

  return (
    <section className="bg-gray-50 dark:bg-gray-900 min-h-screen flex items-center justify-center px-4 sm:px-6">
      <div className="w-full max-w-md bg-white rounded-lg shadow dark:border dark:bg-gray-800 dark:border-gray-700">
        <div className="p-6 space-y-4">
          <h1 className="text-xl font-bold text-center leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
            Sign in
          </h1>

          {errors.general && (
            <p className="text-red-500 text-sm font-medium">{errors.general}</p>
          )}

          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Username
              </label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className={`bg-gray-50 border ${
                  errors.username ? "border-red-500" : "border-gray-300"
                } text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border ${
                  errors.username
                    ? "dark:border-red-500"
                    : "dark:border-gray-600"
                } dark:placeholder-gray-400 dark:text-white`}
                placeholder="username"
                required
              />
              {errors.username && (
                <p className="text-red-500 text-xs mt-1">{errors.username}</p>
              )}
            </div>

            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className={`bg-gray-50 border ${
                  errors.password ? "border-red-500" : "border-gray-300"
                } text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border ${
                  errors.password
                    ? "dark:border-red-500"
                    : "dark:border-gray-600"
                } dark:placeholder-gray-400 dark:text-white`}
                required
              />
              {errors.password && (
                <p className="text-red-500 text-xs mt-1">{errors.password}</p>
              )}
            </div>

            <button
              type="submit"
              className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
            >
              Sign in
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Login;
