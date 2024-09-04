// src/pages/UserOverview.tsx
import React, { useEffect, useState } from 'react';
import UserCard from '../components/UserCard';
import { getAllUsers } from '../services/userService';

interface User {
  id: number;
  email: string;
  prompt: string;
}

const UserOverview: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const data = await getAllUsers();
        setUsers(data);
      } catch (error: any) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div className="p-8 min-h-screen bg-neutral-100 dark:bg-dark-neutral">
      <h1 className="text-4xl font-bold text-center mb-8 text-light-text dark:text-dark-text dark:bg-dark-neutral">User Overview</h1>
      {loading ? (
        <p className="text-center">Loading users...</p>
      ) : error ? (
        <p className="text-red-500 text-center">{error}</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {users.map((user) => (
            <UserCard key={user.id} id={user.id} email={user.email} prompt={user.prompt} />
          ))}
        </div>
      )}
    </div>
  );
};

export default UserOverview;
