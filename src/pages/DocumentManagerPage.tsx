import React from "react";
import DocumentManager from "../components/DocumentManager";


const DocumentManagerPage: React.FC = () => {
    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center">
          <DocumentManager />
        </div>
      );
};

export default DocumentManagerPage; 