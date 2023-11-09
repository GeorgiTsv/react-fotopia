import React, { useState, useEffect } from 'react';
import BlogModule from './BlogModule';

import './styling/blog.css'; // Import your CSS file for styling

const endpoint = "https://web-app-react-fotopia-default-rtdb.europe-west1.firebasedatabase.app/blog.json";

function Blog({ }) {
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
    <div className='Blog Correction FullWidth'>
      {posts.map(post => (
        <BlogModule photo={post.photo}
          heading={post.heading}
          subheading={post.sub}
        />
      ))}
    </div>
  )
};

export default Blog;