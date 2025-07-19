import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';

function Home(){
  const navigate=useNavigate();
  const handleGetStarted=()=>{
    navigate('/dashboard');
  };

  return(
    <div className='home-container'>
      <h1>Welcome to Movie Render</h1>
      <p>Upload and access your media across all your devices connected on the same Wi-Fi network -fast, seamless, and private</p>
    <div>
      <div className='button-container'>
        <div className='button'>Login</div>
        <div className='button'>Contact Us</div>
        <div className='button' onClick={handleGetStarted}>Get Started</div>
      </div>
    </div>
    </div>
  );
}

export default Home;