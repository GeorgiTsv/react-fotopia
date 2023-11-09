import React, { useEffect, useState } from 'react';
import FeedModule from './FeedModule';

import './styling/feed.css'; // Import your CSS file for styling

const endpoint = "https://web-app-react-fotopia-default-rtdb.europe-west1.firebasedatabase.app/feed.json";



function Feed({ }) {
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
    <div className="Feed FullWidth Correction">
      {/* {console.log(posts)} */}
      {posts.map(post => (
        <FeedModule imageLink={post.photo}
          Name={post.name}
          Camera={post.camera}
        />
      ))}



    </div>
  );
};

export default Feed;
