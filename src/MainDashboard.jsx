// src/MainDashboard.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './MainDashboard.css';

function MainDashboard({ folders }) {
  const [showFolders, setShowFolders] = useState(false);
  const navigate = useNavigate();

  const handleRenderImages = () => {
    setShowFolders(true);
  };

  const handleSelectFolder = (folder) => {
    navigate(`/gallery/${folder}`);
  };

  return (
    <div className="dashboard-page">
      <nav className="navbar">
        <div className="logo">MyApp</div>
        <ul className="nav-links">
          <li><a href="/">Home</a></li>
          <li><a href="/upload">Upload</a></li>
          <li><a href="#">Logout</a></li>
        </ul>
      </nav>

      <div className="dashboard-content">
        <h1>Main Dashboard</h1>

        <div className="card-grid">
          <div className="dashboard-card" onClick={handleRenderImages}>
            📷 Render Images
          </div>
          <div className="dashboard-card" onClick={() => navigate('/upload')}>
            ⬆️ Upload Media
          </div>
        </div>

        {showFolders && (
          <div className="folder-select-section">
            <h2>Select a Folder to View Images</h2>
            <div className="folder-list">
              {Object.keys(folders).length === 0 ? (
                <p>No folders available. Please upload some images first.</p>
              ) : (
                Object.keys(folders).map((folder, i) => (
                  <div
                    key={i}
                    className="folder-item"
                    onClick={() => handleSelectFolder(folder)}
                  >
                    📁 {folder}
                  </div>
                ))
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default MainDashboard;
