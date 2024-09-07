import React, { useState } from 'react';
import { uploadDocument } from '../services/documentService';
import { getLoggedInUserId } from '../services/authService';

const DocumentUpload: React.FC = () => {
  const [file, setFile] = useState<File | null>(null);
  const [documentName, setDocumentName] = useState<string>('');
  const [uploading, setUploading] = useState(false);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const selectedFile = e.target.files[0];
      setFile(selectedFile);
      setDocumentName(selectedFile.name); // Set the document name automatically
    }
  };

  const userId = getLoggedInUserId() || 0;

  const handleUpload = async () => {
    if (!file || !documentName) {
      alert('Please select a file and provide a document name.');
      return;
    }

    const formData = new FormData();
    formData.append('file', file);

    setUploading(true);

    try {
      await uploadDocument(userId, file, documentName);
      alert('Document uploaded successfully');
      setFile(null);  // Reset file input after upload
      setDocumentName('');  // Reset document name after upload
      window.location.reload();  // Reload the page to fetch the updated documents
    } catch (error) {
      console.error('Error uploading document:', error);
      alert('Failed to upload document');
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="flex justify-center mt-10">
      <div className="w-full max-w-md">
        <div className="bg-base rounded-lg overflow-hidden">
          <div className="p-6">
            <h2 className="text-2xl text-black dark:text-dark-text font-bold mb-4 text-center">Upload a Document</h2>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="file">
                Select File
              </label>
              <div className='tooltip' data-tip="Only PDF, Dockx and txt files are accepted">
                <input 
                type="file" 
                onChange={handleFileChange} 
                className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100" 
                id="file"
              />
              </div>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="documentName">
                Document Name
              </label>
              <input 
                type="text" 
                id="documentName" 
                value={documentName} 
                readOnly 
                className="w-full px-3 py-2 text-gray-700 bg-white border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" 
              />
            </div>
            <div className="flex justify-center">
              <button 
                onClick={handleUpload} 
                className={`w-full px-4 py-2 text-white font-semibold rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 ${uploading ? 'bg-blue-300' : 'bg-blue-500 hover:bg-blue-700'}`} 
                disabled={!file || uploading}
              >
                {uploading ? 'Uploading...'   : 'Upload Document'}
                {uploading && <progress className="progress w-56"></progress>}

                
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DocumentUpload;
