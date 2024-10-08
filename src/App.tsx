import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Home from './pages/Home'; // Assuming you have a Home component
import Navbar from './components/Navbar';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import ChatPage from './pages/ChatPage';
import DocumentManagerPage from './pages/DocumentManagerPage';
import UserOverview from './pages/UserOverviewPage';
import UploadDocumentPage from './pages/UploadDocumentPage';
import Unauthorized from './pages/UnauthorizedPage';
import ProtectedRoute from './components/Auth/ProtectedRoute';
import DocumentDetailPage from './pages/DocumentDetailPage';

import './App.css'




const App: React.FC = () => {
  return (
    <Router basename='/use-case-gpt-frontend/'>
      <Navbar />
      <ToastContainer position="top-center" />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/chat" element={<ProtectedRoute component={ChatPage}/>} />
        <Route path="/document-viewer" element={<ProtectedRoute component={DocumentManagerPage} />} />
        <Route path="/upload-document" element={<ProtectedRoute component={UploadDocumentPage} />} />
        <Route path="/documents/document/:id" element={<ProtectedRoute component={DocumentDetailPage} />} />
        <Route path="/users" element={<ProtectedRoute component={UserOverview} />} />
        <Route path="/unauthorized" element={<Unauthorized />} />
      </Routes>
    </Router>
  );
};

export default App;
