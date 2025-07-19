import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import MainDashboard from './MainDashboard';
import UploadMedia from './UploadMedia';
import GalleryView from './GalleryView';

function App() {
  const [folders, setFolders] = useState({});

  // Load folders from localStorage on first mount
  useEffect(() => {
    const stored = localStorage.getItem('folders');
    if (stored) {
      setFolders(JSON.parse(stored));
    }
  }, []);

  // Save folders to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('folders', JSON.stringify(folders));
  }, [folders]);

  // Create a new folder
  const createFolder = (folderName) => {
    if (folderName && !folders[folderName]) {
      setFolders((prev) => ({ ...prev, [folderName]: [] }));
    }
  };

  // Upload images to an existing folder
  const uploadToFolder = (folderName, files) => {
    if (!folderName || !folders[folderName]) return;

    const newImages = Array.from(files).map((file) => ({
      name: file.name,
      src: URL.createObjectURL(file),
    }));

    setFolders((prev) => ({
      ...prev,
      [folderName]: [...prev[folderName], ...newImages],
    }));
  };

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/dashboard" element={<MainDashboard folders={folders} />} />
      <Route
        path="/upload"
        element={
          <UploadMedia
            folders={folders}
            createFolder={createFolder}
            uploadToFolder={uploadToFolder}
          />
        }
      />
      <Route
        path="/gallery/:folderName"
        element={<GalleryView folders={folders} />}
      />
    </Routes>
  );
}

export default App;
