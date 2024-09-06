import React from "react";
import DocumentUpload from "../components/DocumentUpload";

const UploadDocumentPage: React.FC = () => {
    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex flex-col items-center pt-12">
            <DocumentUpload />
        </div>
    );
};

export default UploadDocumentPage;
