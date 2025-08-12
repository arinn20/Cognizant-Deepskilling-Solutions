import React from 'react';
// github id: @mukherjeea10

const CourseDetails = ({ courses }) => {
  return (
    <div className="box">
      <h2>Course Details</h2>
      {courses.map((c) => (
        <div key={c.id}>
          <h3>{c.title}</h3>
          <p>{c.date}</p>
        </div>
      ))}
    </div>
  );
};

export default CourseDetails;
