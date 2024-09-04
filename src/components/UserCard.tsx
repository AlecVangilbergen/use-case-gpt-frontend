// src/components/UserCard.tsx
import React from 'react';

interface UserCardProps {
  id: number;
  email: string;
  prompt: string;
}

const UserCard: React.FC<UserCardProps> = ({ id, email, prompt }) => {
  return (
    <div className="card shadow-lg rounded-lg  bg-neutral-100 text-light-text dark:bg-dark-neutral dark:text-dark-text">
      <div className="card-body">
        <h1 className="card-title">{id}</h1>
        <h2 className="card-title text-lg font-bold">Email: {email}</h2>
        <p>Entered prompt: {prompt}</p>
      </div>
    </div>
  );
};

export default UserCard;
