import React from 'react';
// github id: @mukherjeea10

const BlogDetails = ({ blogs }) => {
  return (
    <div className="box">
      <h2>Blog Details</h2>
      {blogs.map((b) => (
        <div key={b.id}>
          <h3>{b.title}</h3>
          <strong>{b.author}</strong>
          <p>{b.desc}</p>
        </div>
      ))}
    </div>
  );
};

export default BlogDetails;
