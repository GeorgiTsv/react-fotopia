import React from 'react';

const BottomNavigation = ({handleClick }) => {
  return (
    <div className="bottom-navigation">
      <button
        onClick={() => handleClick('feed')}
        className="nav-item"
      >
      <img src={process.env.PUBLIC_URL + '/home.png'}  alt="Header" className="Home" />
      </button>
      <a href="/search" className="nav-item">
      <img src={process.env.PUBLIC_URL + '/search.png'} alt="Search" />
      </a>
      <button
        onClick={() => handleClick('upload')}
        className="nav-item"
      >
      <img src={process.env.PUBLIC_URL + '/upload.png'} alt="Upload" />
      </button>
      <a href="/notifications" className="nav-item">
      <img src={process.env.PUBLIC_URL + '/notifications.png'} alt="Notifications" />
      </a>
      <a href="/profile" className="nav-item">
      <img src={process.env.PUBLIC_URL + '/profile.png'} alt="Profile" />
      </a>
    </div>
  );
};

export default BottomNavigation;
