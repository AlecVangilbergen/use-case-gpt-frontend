import React from 'react';
import DocumentUpload from './DocumentUpload';
import DocumentViewer from './DocumentViewer';

const DocumentManager: React.FC = () => {
  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold text-center mb-8">Document Manager</h1>
      <DocumentUpload />
      <DocumentViewer />
    </div>
  );
};

export default DocumentManager;
