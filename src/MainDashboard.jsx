import React from "react";
import './MainDashboard.css';
import { useNavigate } from "react-router-dom";

function MainDashboard(){
  const navigate = useNavigate();

  return(
    <div className="dashboard">
      {/*navigation bar*/}
      <nav className="navbar">
        <div className="logo">My app</div>
        <ul className="nav-links">
          <li><a href="/">Home</a></li>
          <li><a href="/upload">Upload</a></li>
          <li><a href="#">Logout</a></li>
        </ul>
      </nav>


      {/*navigation bar*/}
      <div className="dashboard-content">
        <h1>Main DashBoard</h1>
        <div className="card-container">
          <div className="card" onClick={()=>navigate('/folders')}>
            <h2>Render Images</h2>
            <p>Click to view or manage your images</p>
          </div>
          <div className="card">
            <h2>Render Videos</h2>
            <p>Click to view or manage your videos</p>
          </div>

        </div>
      </div>
    </div>
  );
}

export default MainDashboard;