import React, { useState } from 'react';
import { Card, Input, Button, Typography } from "@material-tailwind/react";
import { ChatMessage } from './ChatMessage';
import { sendMessage } from '../services/chatService';
import { getLoggedInUserId } from '../services/authService';

interface Message {
  role: 'user' | 'assistant';
  content: string;
}



const Chat: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState<string>('');
  const [loading, setLoading] = useState(false);

  const userId = getLoggedInUserId();

  const handleSendMessage = async () => {
    setLoading(true);
    if (!input.trim()) return;

    const newMessages = [...messages, { role: 'user' as 'user' | 'assistant', content: input }];
    setMessages(newMessages);
    setInput('');

    try {
      const response = await sendMessage(input, userId);

      console.log('Assistant response:', response);

      const assistantMessage = response;

      setMessages([...newMessages, { role: 'assistant', content: assistantMessage }]);
    } catch (error) {
      console.error("Error during chat:", error);
      setMessages([...newMessages, { role: 'assistant', content: 'Sorry, something went wrong.' }]);
    } finally {
      setLoading(false);
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

      <div className="h-[520px] overflow-y-auto space-y-4">
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
        {loading ? <span className="loading loading-spinner loading-xs"></span> : 'Send'}

        </Button>
      </div>
    </Card>
  );
};

export default Chat;
