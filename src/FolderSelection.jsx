import React from "react";

import { useNavigate } from "react-router-dom";
import'./FolderSelection.css';

function FolderSelection(){
  const navigate=useNavigate();
  const folders = ['vaction','work','family','memes','projects'];

  const openFolderr = (folderName)=>{
    navigate('/images/${folderName}');
  };

  return(
     <div className="folder-page">
      <nav className="navbar">
        <div className="logo">MyApp</div>
        <ul className="nav-links">
          <li><a href="/">Home</a></li>
          <li><a href="/upload">Upload</a></li>
          <li><a href="#">Logout</a></li>
        </ul>
      </nav>

      <div className="folder-selection">
        <h1>Select a Folder</h1>
        <div className="folder-grid">
          {folders.map((folder, i) => (
            <div key={i} className="folder-card" onClick={() => openFolderr(folder)}>
              📁 {folder}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default FolderSelection;