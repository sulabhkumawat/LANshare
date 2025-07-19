
import React from 'react';
import './UploadMedia.css';

function UploadMedia() {
  return (
    <div className="upload-page">
      {/* Navigation Bar */}
      <nav className="navbar">
        <div className="logo">MyApp</div>
        <ul className="nav-links">
          <li><a href="/">Home</a></li>
          <li><a href="#">Logout</a></li>
        </ul>
      </nav>

      {/* Page Content */}
      <div className="upload-content">
        <h1>Upload Images or Videos</h1>

        {/* Instructions */}
        <div className="instructions">
          <h2>Instructions</h2>
          <ol>
            <li>Create a folder.</li>
            <li>Upload images or videos into the folder.</li>
            <li>Access them from your phone, laptop, or Android TV on the same WiFi.</li>
          </ol>
        </div>

        {/* Buttons */}
        <div className="button-container">
          <button className="action-button">Create Folder</button>
          <button className="action-button">Upload Media</button>
        </div>
      </div>
    </div>
  );
}

export default UploadMedia;
