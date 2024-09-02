// RegisterPage.tsx
import React from 'react';
import Register from '../components/Register';

const RegisterPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-base flex items-center justify-center">
      <div className="bg-base rounded-lg shadow-2xl p-8 max-w-md w-full">
        <Register />
      </div>
    </div>
  );
};

export default RegisterPage;
