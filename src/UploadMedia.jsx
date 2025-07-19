// src/UploadMedia.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './UploadMedia.css';

function UploadMedia({ folders, createFolder, uploadToFolder }) {
  const [newFolderName, setNewFolderName] = useState('');
  const [selectedFolder, setSelectedFolder] = useState('');
  const navigate = useNavigate();

  const handleCreateFolder = () => {
    if (newFolderName.trim()) {
      createFolder(newFolderName.trim());
      setNewFolderName('');
    }
  };

  const handleUpload = (e) => {
    const files = e.target.files;
    if (selectedFolder) {
      uploadToFolder(selectedFolder, files);
      navigate(`/gallery/${selectedFolder}`);
    }
  };

  return (
    <div className="upload-page">
      <nav className="navbar">
        <div className="logo">MyApp</div>
        <ul className="nav-links">
          <li><a href="/">Home</a></li>
          <li><a href="#">Logout</a></li>
        </ul>
      </nav>

      <div className="upload-content">
        <h1>Upload Images or Videos</h1>

        <div className="instructions">
          <h2>Instructions</h2>
          <ol>
            <li>Create a folder.</li>
            <li>Upload images or videos into the folder.</li>
            <li>Access them from any device on the same WiFi.</li>
          </ol>
        </div>

        <div className="button-container">
          <div>
            <input
              type="text"
              placeholder="Enter folder name"
              value={newFolderName}
              onChange={(e) => setNewFolderName(e.target.value)}
            />
            <button onClick={handleCreateFolder}>Create Folder</button>
          </div>

          <div>
            {Object.keys(folders).length > 0 ? (
              <>
                <select onChange={(e) => setSelectedFolder(e.target.value)} value={selectedFolder}>
                  <option value="">Select Folder</option>
                  {Object.keys(folders).map((folder, i) => (
                    <option key={i} value={folder}>{folder}</option>
                  ))}
                </select>
                <input
                  type="file"
                  multiple
                  accept="image/*"
                  onChange={handleUpload}
                  disabled={!selectedFolder}
                />
              </>
            ) : (
              <p style={{ marginTop: '10px' }}>Create a folder to start uploading.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default UploadMedia;
