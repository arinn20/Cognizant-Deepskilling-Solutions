// Posts.js
import React, { Component } from 'react';
import Post from './Post';

class Posts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      hasError: false
    };
  }

  loadPosts = () => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then(response => response.json())
      .then(data => this.setState({ posts: data.slice(0, 5) })) // Load only first 5 posts
      .catch(error => {
        console.error("Fetch error:", error);
        this.setState({ hasError: true });
      });
  };

  componentDidMount() {
    this.loadPosts();
  }

  componentDidCatch(error, info) {
    alert("Something went wrong in Posts component.");
    console.error("Error caught:", error, info);
  }

  render() {
    if (this.state.hasError) {
      return <h3>Error loading posts. Try again later.</h3>;
    }

    return (
      <div>
        <h1 style={{ textAlign: 'center', color: '#444' }}>Blog Posts</h1>
        {this.state.posts.map(post => (
          <Post key={post.id} title={post.title} body={post.body} />
        ))}
      </div>
    );
  }
}

export default Posts;
