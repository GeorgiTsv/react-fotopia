import React, { useState } from 'react';
//import './syle.css'; // Import your CSS file for styling

const UpperNavigation = ( {handleClick , activeButton }) => {

 

  return (
    <div className="upper-navigation">
      <button
        className={`nav-button ${activeButton === 'feed' ? 'active' : ''}`}
        onClick={() => handleClick('feed')}
      >
        Feed
      </button>
      <button
        className={`nav-button ${activeButton === 'events' ? 'active' : ''}`}
        onClick={() => handleClick('events')}
      >
        Events
      </button>
      <button
        className={`nav-button ${activeButton === 'blog' ? 'active' : ''}`}
        onClick={() => handleClick('blog')}
      >
        Blog
      </button>
    </div>
  );
};

export default UpperNavigation;
