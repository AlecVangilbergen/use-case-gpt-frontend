import React, { useState } from 'react';
import { uploadDocument } from '../services/documentService';
const DocumentUpload: React.FC = () => {
  const [file, setFile] = useState<File | null>(null);
  const [uploading, setUploading] = useState(false);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFile(e.target.files[0]);
    }
  };
  const userId = 1;

  const handleUpload = async () => {
    if (!file) return;

    const formData = new FormData();
    formData.append('file', file);

    setUploading(true);

    try {
      await uploadDocument(userId, file);
      alert('Document uploaded successfully');
      setFile(null);  // Reset file input after upload
    } catch (error) {
      console.error('Error uploading document:', error);
      alert('Failed to upload document');
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="mb-8">
      <input type="file" onChange={handleFileChange} className="mb-4" />
      <button 
        onClick={handleUpload} 
        className="btn btn-primary" 
        disabled={!file || uploading}
      >
        {uploading ? 'Uploading...' : 'Upload Document'}
      </button>
    </div>
  );
};

export default DocumentUpload;
