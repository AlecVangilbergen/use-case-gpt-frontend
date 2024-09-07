import React from "react";
import DocumentManager from "../components/DocumentViewer";
import DocumentUpload from "../components/DocumentUpload";


const DocumentManagerPage: React.FC = () => {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex flex-col items-center pt-12">
          <DocumentUpload />
          <DocumentManager />
        </div>
      );
};

export default DocumentManagerPage; 