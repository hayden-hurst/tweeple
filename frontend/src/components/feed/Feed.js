import './Feed.css';
import React, { useState } from 'react';
/*
Edit Feed.js and save to reload.
*/

// Hardcoded fake user posts for demonstration
const fakePosts = [
  {
    id: 1,
    username: 'Alex1212',
    content: 'This is the first post. #example #demo',
  },
  {
    id: 2,
    username: 'Johnny2407',
    content: 'Another post from a different user.',
  },
  {
    id: 3,
    username: 'Matthew415',
    content: 'Here is the third post. Enjoy!',
  },
];

function Feed() {
  const [newPost, setNewPost] = useState('');
  const [posts, setPosts] = useState(fakePosts);

  const handlePostChange = (e) => {
    setNewPost(e.target.value);
  };

  const handleAddPost = () => {
    if (newPost.trim() === '') {
      return; // Don't add empty posts
    }

    const newPostData = {
      id: posts.length + 1,
      username: 'Hayden Hurst', // Replace with the actual username or user data
      content: newPost,
    };

    setPosts([...posts, newPostData]);
    setNewPost('');
  };

  return (
    <div className="Feed">
      <header className="Feed-header">
        {/*Feed div*/}
        <h1>Feed</h1>
        <div>
          {/* Input field to create a new post */}
          <textarea
              rows="3"
              placeholder="What's on your mind?"
              value={newPost}
              onChange={handlePostChange}
          />
          <button onClick={handleAddPost}>Post</button>
        </div>
        <div>
          {posts.map((post) => (
              <div key={post.id} className="post">
                <div className="user-info">
                  <span className="username">{post.username}</span>
                </div>
                <p className="post-content">{post.content}</p>
              </div>
          ))}
        </div>
        {/**/}
      </header>
    </div>


  );
}

export default Feed;
