// components/RenderImage.jsx
import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

export default function RenderImage({ folders, uploadImages }) {
  const { folderName } = useParams();
  const navigate = useNavigate();
  const images = folders[folderName] || [];
  const [preview, setPreview] = useState(null);

  return (
    <div>
      <button onClick={() => navigate('/')}>⬅ Back to Folders</button>
      <h1>{folderName} Gallery</h1>
      <input
        type="file"
        multiple
        accept="image/*"
        onChange={e => uploadImages(folderName, e.target.files)}
      />
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(5, 1fr)',
        gap: '10px',
        marginTop: '20px'
      }}>
        {images.map((img, i) => (
          <img
            key={i}
            src={img.src}
            alt={img.name}
            style={{ width: '200px', height: '200px', objectFit: 'cover', cursor: 'pointer' }}
            onClick={() => setPreview(img.src)}
          />
        ))}
      </div>

      {preview && (
        <div style={{
          position: 'fixed', top: 0, left: 0,
          width: '100vw', height: '100vh',
          background: 'rgba(0,0,0,0.8)',
          display: 'flex', justifyContent: 'center', alignItems: 'center'
        }}>
          <img src={preview} alt="Preview" style={{
            maxWidth: '90%', maxHeight: '90%'
          }}/>
          <button
            onClick={() => setPreview(null)}
            style={{
              position: 'absolute',
              top: 20, right: 20,
              fontSize: '20px',
              background: 'red', color: 'white',
              border: 'none', borderRadius: '5px',
              padding: '10px 15px',
              cursor: 'pointer'
            }}
          >Close</button>
        </div>
      )}
    </div>
  );
}
