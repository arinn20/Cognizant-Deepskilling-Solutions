// Post.js
import React from 'react';

function Post(props) {
  return (
    <div style={{ margin: '20px', padding: '10px', border: '1px solid gray', borderRadius: '5px' }}>
      <h2>{props.title}</h2>
      <p>{props.body}</p>
    </div>
  );
}

export default Post;
