import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import author from 'Author.js'
// import title from 'Title.js'
// import img from 'Image.js'
const author = 'Raymond K Boseman'
const title = "Things Black People Weren't Taught"
const img = "https://m.media-amazon.com/images/I/31DRXvr5JKL._SY291_BO1,204,203,200_QL40_FMwebp_.jpg"

 const BookList = () => {
  return (
    <section className="booklist">
      <Book title="Test"/>
      <Book author='another test' number={11}/>
      </section>
  )
}

 const Book = (props) => {
   return (
      <article className="book">
    <img src={img} alt={title} />
    <h2>{title}</h2>
    <h4>{author}</h4>
    <p>{props.title}</p>
    <p>{props.job}</p>
    <p>{props.number}</p>
    </article>
   )
 }



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<BookList />);

