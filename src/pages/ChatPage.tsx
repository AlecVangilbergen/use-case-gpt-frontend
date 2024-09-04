import React from "react";
import Chat from "../components/Chat";


const ChatPage: React.FC = () => {
    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center">
          <Chat />
        </div>
      );
};

export default ChatPage;