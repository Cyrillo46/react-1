import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import author from 'Author.js'
// import title from 'Title.js'
// import img from 'Image.js'
const FirstBook =  {
author: 'Raymond K Boseman',
title: "Things Black People Weren't Taught",
img: "https://m.media-amazon.com/images/I/31DRXvr5JKL._SY291_BO1,204,203,200_QL40_FMwebp_.jpg"
}

const SecondBook =  {
  author: 'Chuck Callaway',
  title: "Practical Joint Manipulation",
  img: "https://m.media-amazon.com/images/I/41GP3IUNOLL.jpg"
  }

 const BookList = () => {
  return (
    <section className="booklist">
      <Book title={FirstBook.title} author={FirstBook.author} img={FirstBook.img} />
      <Book title={SecondBook.title} author={SecondBook.author} img={SecondBook.img} />
      </section>
  )
}

 const Book = (props) => {
   return (
      <article className="book">
    <img src={SecondBook.img} alt={SecondBook.title} />
    <h2>{SecondBook.title}</h2>
    <h4>{SecondBook.author}</h4>
    <p>{props.title}</p>
    <p>{props.job}</p>
    <p>{props.number}</p>
    </article>
   )
 }


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<BookList />);

