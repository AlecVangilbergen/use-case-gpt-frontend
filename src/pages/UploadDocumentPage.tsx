import React from "react";
import DocumentUpload  from "../components/DocumentUpload";

const UploadDocumentPage: React.FC = () => {
    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center">
          <DocumentUpload />
        </div>
      );
};

export default UploadDocumentPage;