import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './GalleryView.css';

function GalleryView({ folders }) {
  const { folderName } = useParams();
  const navigate = useNavigate();
  const images = folders[folderName] || [];
  const [previewSrc, setPreviewSrc] = useState(null);

  return (
    <div className="gallery-page">
      <nav className="navbar">
        <div className="logo">MyApp</div>
        <ul className="nav-links">
          <li><a href="/">Home</a></li>
          <li><a href="/upload">Upload</a></li>
          <li><a href="#">Logout</a></li>
        </ul>
      </nav>

      <div className="gallery-content">
        <h1>Image Gallery — {folderName}</h1>

        {images.length === 0 ? (
          <p>No images uploaded yet in this folder.</p>
        ) : (
          <div className="gallery-grid">
            {images.map((img, i) => (
              <div key={i} className="gallery-item" onClick={() => setPreviewSrc(img.src)}>
                <img src={img.src} alt={img.name} />
              </div>
            ))}
          </div>
        )}
      </div>

      {previewSrc && (
        <div className="preview-modal" onClick={() => setPreviewSrc(null)}>
          <img src={previewSrc} alt="Preview" className="preview-image" />
          <button className="close-button" onClick={() => setPreviewSrc(null)}>Close</button>
        </div>
      )}
    </div>
  );
}

export default GalleryView;
