import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Book from './Book.js'

const Books = [
  {
    author: 'Raymond K Boseman',
    title: "Things Black People Weren't Taught",
    img: "https://m.media-amazon.com/images/I/31DRXvr5JKL._SY291_BO1,204,203,200_QL40_FMwebp_.jpg",
    id: 1
    }, 
    {
      author: 'Chuck Callaway',
      title: "Practical Joint Manipulation",
      img: "https://m.media-amazon.com/images/I/41GP3IUNOLL.jpg",
      id: 2
      },
]

 const BookList = () => {
   return (
     <section className="booklist">
      {Books.map((book) => {
      return <Book {...book} />
    })}</section>
  )
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<BookList />);


