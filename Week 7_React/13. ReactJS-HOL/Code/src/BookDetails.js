import React from 'react';
// github id: @mukherjeea10

const BookDetails = ({ books }) => {
  return (
    <div className="box">
      <h2>Book Details</h2>
      {books.map((book) => (
        <div key={book.id}>
          <h3>{book.bname}</h3>
          <h4>{book.price}</h4>
        </div>
      ))}
    </div>
  );
};

export default BookDetails;
