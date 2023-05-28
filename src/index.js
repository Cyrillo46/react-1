import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';


 const BookList = () => {
  return (
    <>
    <section className="booklist">
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      </section>
      </>
  )
}

 const Book = () => {
  return (
    <>
    <article className="Book">
    <Title />
    <Image />
    <Author />
    </article>
    </>
  )
}

const Image = () => <img src="https://m.media-amazon.com/images/I/31DRXvr5JKL._SY291_BO1,204,203,200_QL40_FMwebp_.jpg" alt="Things Black People Weren't Taught" />
const Title = () => <h2>Things Black People Weren't Taught</h2>
const Author = () => <h2>Raymond K Boseman</h2>


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<BookList />);

