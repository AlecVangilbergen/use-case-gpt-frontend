import React from 'react';
import { Typography } from "@material-tailwind/react";
import clsx from 'clsx';

interface ChatMessageProps {
  role: 'user' | 'assistant';
  content: string;
}

export const ChatMessage: React.FC<ChatMessageProps> = ({ role, content }) => {
  return (
    <div className={clsx('flex', {
      'justify-end': role === 'user',
      'justify-start': role === 'assistant'
    })}>
      <div className={clsx('p-3 rounded-lg max-w-xs', {
        'bg-blue-500 text-white': role === 'user',
        'bg-gray-200 dark:bg-gray-700 dark:text-white': role === 'assistant'
      })}>
        <Typography placeholder="" onPointerEnterCapture={() => {}} onPointerLeaveCapture={() => {}}>{content}</Typography>
      </div>
    </div>
  );
};
