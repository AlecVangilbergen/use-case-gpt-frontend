import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';  // Import Link from React Router
import { getDocumentsByUser } from '../services/documentService';
import { getLoggedInUserId } from '../services/authService';

interface Document {
  id: number;
  content: string;
  user_id: number;
  name: string;
}

const DocumentViewer: React.FC = () => {
  const [documents, setDocuments] = useState<Document[]>([]);
  console.log('User ID:', getLoggedInUserId());
  const userId = getLoggedInUserId() || 0;

  useEffect(() => {
    const fetchDocuments = async () => {
      try {
        const response = await getDocumentsByUser(userId);  // Fetch documents for the user
        console.log('Documents:', response);
        setDocuments(response);  // Set the response directly to state
      } catch (error) {
        console.error('Error fetching documents:', error);
      }
    };

    fetchDocuments();
  }, []);

  return (
    <div className="container mx-auto mt-10">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Your Documents</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {documents.map((doc) => (
          <div key={doc.id} className="p-4 border border-gray-300 rounded-lg shadow-md bg-white">
            <h3
              className="text-xl font-semibold mb-2"
              style={{
                whiteSpace: 'nowrap',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                maxWidth: '100%',
              }}
            >
              <Link to={`/documents/document/${doc.id}`} className="text-blue-500 hover:underline">
                {doc.name}
              </Link>
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DocumentViewer;
