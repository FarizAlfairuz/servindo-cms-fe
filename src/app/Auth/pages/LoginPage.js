import React from 'react';

const LoginPage = () => {
  const a = 0;
  return (
    <div className="bg-gray-400 h-screen flex justify-center items-center">
      <div className="bg-white w-72 h-64 p-6 rounded-md shadow-xl space-y-4">
        <div className="text-2xl flex justify-center">Logo</div>
        <form className="flex flex-col space-y-4">
          <input
            type="text"
            placeholder="Username"
            className="border-2 border-slate-300 px-2 py-1 rounded-md"
          />
          <input
            type="text"
            placeholder="Password"
            className="border-2 border-slate-300 px-2 py-1 rounded-md"
          />
          <button
            type="submit"
            className="bg-green-700 hover:bg-green-600 py-2 rounded-md text-white"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
