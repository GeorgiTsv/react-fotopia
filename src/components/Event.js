import React, { useState, useEffect } from 'react';
import EventModule from './EventModule';

import './styling/feed.css'; // Import your CSS file for styling

const endpoint = "https://web-app-react-fotopia-default-rtdb.europe-west1.firebasedatabase.app/events.json";

function Event({ }) {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    async function getPosts() {
      const response = await fetch(endpoint); //posts.json is the data ressource
      const data = await response.json();
      const postsArray = Object.keys(data).map(key => ({ id: key, ...data[key] })); // from object to array
      console.log(postsArray);
      setPosts(postsArray);
    }
    getPosts();
  }, []);
  return (
    <div className='Event Correction FullWidth'>
      {posts.map(post => (
        <EventModule photo={post.photo}
          header={post.header}
          location={post.location}
          time={post.time}
          date={post.date}
        />
      ))}
    </div>
  );
};

export default Event;
