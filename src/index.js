import React from 'react';
import ReactDOM from 'react-dom/client';


 const BookList = () => {
  return (
    <section>BookList</section>
  )
}

 const Book = () => {
  return (
    <article>Book</article>
  )
}

const Image = () => <h2>Image placeholder</h2>


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<BookList />);

