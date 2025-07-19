// src/RenderImage.jsx

import React from 'react';
import { useParams } from 'react-router-dom';
import './RenderImage.css';

function RenderImage() {
  const { folderName } = useParams();

  return (
    <div className="image-gallery-page">
      <nav className="navbar">
        <div className="logo">MyApp</div>
        <ul className="nav-links">
          <li><a href="/">Home</a></li>
          <li><a href="/upload">Upload</a></li>
          <li><a href="/folders">Images</a></li>
          <li><a href="#">Logout</a></li>
        </ul>
      </nav>

      <div className="gallery-content">
        <h1>Image Gallery - {folderName}</h1>
        <div className="gallery-grid">
          {[...Array(20)].map((_, i) => (
            <div className="gallery-item" key={i}>
              <img src="https://via.placeholder.com/200" alt={`Thumbnail ${i + 1}`} />
              <div className="hover-overlay">
                <button>Preview</button>
                <button>Download</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default RenderImage;
