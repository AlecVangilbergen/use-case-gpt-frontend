import React from 'react';

const Register: React.FC = () => {
  return (
    <div className="min-h-screen bg-base flex items-center justify-center">
      <div className="bg-base rounded-lg shadow-2xl p-8 max-w-md w-full">
        <form>
          <h2 className="text-2xl font-semibold mb-4">Register New User</h2>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <input type="email" id="email" name="email" className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" />
          </div>
          
          <div className="mb-6">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
            <input type="password" id="password" name="password" className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" />
          </div>
          <div className="mb-6">
            <label htmlFor="prompt" className="block text-sm font-medium text-gray-700">Prompt</label>
            <input type="text" id="prompt" name="prompt" className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" />
          </div>
          <div>
            <button type="submit" className="btn btn-primary w-full">Register</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
