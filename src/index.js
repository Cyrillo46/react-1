import React from 'react';
import ReactDOM from 'react-dom/client';


 const BookList = () => {
  return (
      <Book />
  )
}

 const Book = () => {
  return (
    <>
    <Title />
    <Image />
    <Author />
    </>
  )
}

const Image = () => <h2>Image placeholder</h2>
const Title = () => <h2>Title placeholder</h2>
const Author = () => <h2>Author placeholder</h2>


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<BookList />);

