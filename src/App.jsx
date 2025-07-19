// src/App.jsx
import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import MainDashboard from './MainDashboard';
import UploadMedia from './UploadMedia';
import GalleryView from './GalleryView';

function App() {
  const [folders, setFolders] = useState({});

  const createFolder = (folderName) => {
    if (folderName && !folders[folderName]) {
      setFolders(prev => ({ ...prev, [folderName]: [] }));
    }
  };

  const uploadToFolder = (folderName, files) => {
    if (!folderName || !folders[folderName]) return;
    const newImages = Array.from(files).map(file => ({
      name: file.name,
      src: URL.createObjectURL(file)
    }));
    setFolders(prev => ({
      ...prev,
      [folderName]: [...prev[folderName], ...newImages]
    }));
  };

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/dashboard" element={<MainDashboard />} />
      <Route path="/upload" element={
        <UploadMedia
          folders={folders}
          createFolder={createFolder}
          uploadToFolder={uploadToFolder}
        />
      } />
      <Route path="/gallery/:folderName" element={<GalleryView folders={folders} />} />
    </Routes>
  );
}

export default App;
