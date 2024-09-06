import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getDocumentById } from '../services/documentService';  // Create a service function to fetch a single document

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

  return (
    <div>
        <Link to="/document-viewer" className="btn btn-sm">
          Back to Documents
        </Link>
    <div className="container mx-auto mt-10">

      <h2 className="text-2xl font-bold text-gray-800 mb-6">{document.name}</h2>
      <p className="text-gray-700">{document.content}</p>
    </div>
    </div>

  );
};

export default DocumentDetail;
