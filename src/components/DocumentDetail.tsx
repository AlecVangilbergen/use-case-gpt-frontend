import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getDocumentById, getDocumentDownloadUrl  } from '../services/documentService';  // Create a service function to fetch a single document

interface Document {
  id: number;
  content: string;
  user_id: number;
  name: string;
}

const DocumentDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();  // Get the document ID from the URL
  const [document, setDocument] = useState<Document | null>(null);

  console.log('Document ID:', id);

  useEffect(() => {
    const fetchDocument = async () => {
      try {
        const response = await getDocumentById(Number(id));  // Fetch the document by ID
        setDocument(response);
      } catch (error) {
        console.error('Error fetching document:', error);
      }
    };

    fetchDocument();
  }, [id]);

  if (!document) {
    return <div>Loading...</div>;
  }

  const downloadUrl = getDocumentDownloadUrl(Number(id));

  return (
    <div className="container mx-auto mt-10">
      <Link to="/document-viewer" className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center mb-5">
        Back to Documents
      </Link>
      <h2 className="text-2xl font-bold text-gray-800 mb-6">{document.name}</h2>
      <p className="text-gray-700 mb-4">Click here to download the original file</p>
      <a href = {downloadUrl} className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center" download>
      <svg className="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z"/></svg>
      <span>Download</span></a>
    </div>
  );
};

export default DocumentDetail;
