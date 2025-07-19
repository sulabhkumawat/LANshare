// components/FolderSelection.jsx
import React, { useState } from 'react';

export default function FolderSelection({ folders, createFolder, navigate }) {
  const [newFolder, setNewFolder] = useState('');

  return (
    <div>
      <h1>Select or Create Folder</h1>
      <input
        type="text"
        placeholder="New folder name"
        value={newFolder}
        onChange={e => setNewFolder(e.target.value)}
      />
      <button onClick={() => { createFolder(newFolder); setNewFolder(''); }}>
        Create Folder
      </button>
      <div>
        {folders.map((f,i) => (
          <div key={i} onClick={() => navigate(`/images/${f}`)}>📁 {f}</div>
        ))}
      </div>
    </div>
  );
}
