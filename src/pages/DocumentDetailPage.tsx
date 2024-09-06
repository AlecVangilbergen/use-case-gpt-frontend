import React from "react";
import DocumentDetail from "../components/DocumentDetail";

const DocumentDetailPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex flex-col items-center pt-12">
    <DocumentDetail />
  </div>
  );
};

export default DocumentDetailPage;