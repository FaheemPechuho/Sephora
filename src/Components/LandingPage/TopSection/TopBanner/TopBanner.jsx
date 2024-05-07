import React from 'react';
import rightlogo from '../img/rightlogo.png';
import { motion as m } from 'framer-motion';
import { useNavigate } from 'react-router-dom'; // Import useNavigate


function TopBanner() {
  const navigate = useNavigate(); // Get the navigate function

  function handleClick() {
    navigate('/shop'); 
  }

  return (
    <div className='top_banner'>
      <div
        className='topbanner_heading'
        initial={{ x: "-100%" }}
        animate={{ x: "0%" }}
        transition={{ duration: 0.55, ease: "easeOut" }}
        exit={{ opacity: 1 }}
      >
        <h1>Sephora, the Global Beauty Icon</h1>
        <h1>Now in Pakistan</h1>
        <h1> Discover an unparalleled curation of prestige</h1>
        <p>Embrace authentic beauty, indulge in self-care like never before.</p>
        <div>
        {/* Add onClick event handler to navigate */}
        <span>
        <button className='ShowNow_btn' onClick={handleClick}>
          Shop Now
        </button>
        </span>
        </div>
      </div>
      <div
        initial={{ x: "100%" }}
        animate={{ x: "0%" }}
        transition={{ duration: 0.55, ease: "easeOut" }}
        exit={{ opacity: 1 }}
      >
        <img src={rightlogo} alt="Not Found" />
      </div>
      <div className='checking'></div>
    </div>
  );
}

export default TopBanner;