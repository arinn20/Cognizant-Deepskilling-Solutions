import React from 'react';
import './App.css';
import CourseDetails from './CourseDetails';
import BookDetails from './BookDetails';
import BlogDetails from './BlogDetails';

function App() {
  const courseData = [
    { id: 1, title: "Angular", date: "4/5/2025" },
    { id: 2, title: "React", date: "6/3/2025" }
  ];

  const bookData = [
    { id: 1, bname: "Master React", price: 670 },
    { id: 2, bname: "Deep Dive into Angular 11", price: 800 },
    { id: 3, bname: "Mongo Essentials", price: 450 }
  ];

  const blogData = [
    { id: 1, title: "React Cooking", author: "Aditya Mukherjee", desc: "Welcome to cook React!" },
    { id: 2, title: "Installation", author: "Schwezdenier", desc: "You can install React from npm." }
  ];
// github id: @mukherjeea10

  return (
    <div className="container">
      <CourseDetails courses={courseData} />
      <BookDetails books={bookData} />
      <BlogDetails blogs={blogData} />
    </div>
  );
}

export default App;
