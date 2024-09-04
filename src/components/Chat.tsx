import React, { useState } from 'react';
import { Card, Input, Button, Typography } from "@material-tailwind/react";
import { ChatMessage } from './ChatMessage';
import { sendMessage } from '../services/chatService';

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

const Chat: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState<string>('');
  const userId = 1;  // Replace with actual user ID logic

  const handleSendMessage = async () => {
    if (!input.trim()) return;

    const newMessages = [...messages, { role: 'user' as 'user' | 'assistant', content: input }];
    setMessages(newMessages);
    setInput('');

    try {
      const response = await sendMessage(input, userId);

      const assistantMessage = response.data.response;

      setMessages([...newMessages, { role: 'assistant', content: assistantMessage }]);
    } catch (error) {
      console.error("Error during chat:", error);
      setMessages([...newMessages, { role: 'assistant', content: 'Sorry, something went wrong.' }]);
    }
  };

  return (
    <Card
      className="w-full max-w-4xl mx-auto p-4 space-y-4 shadow-lg dark:bg-gray-800"
      placeholder=""
      onPointerEnterCapture={() => {}}
      onPointerLeaveCapture={() => {}}
    >
      <Typography variant="h5" className="text-center mb-4 dark:text-white" placeholder="" onPointerEnterCapture={() => {}} onPointerLeaveCapture={() => {}}>
        Chat with Use-Case-GPT
      </Typography>

      <div className="h-96 overflow-y-auto space-y-4">
        {messages.map((message, index) => (
          <ChatMessage key={index} role={message.role} content={message.content} />
        ))}
      </div>

      <div className="flex">
        <Input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type your message..."
          className="flex-1"
          onPointerEnterCapture={() => {}}
          onPointerLeaveCapture={() => {}}
          crossOrigin=""
        />
        <Button
          onClick={handleSendMessage}
          className="ml-4"
          placeholder=""
          onPointerEnterCapture={() => {}}
          onPointerLeaveCapture={() => {}}
        >
          Send
        </Button>
      </div>
    </Card>
  );
};

export default Chat;
