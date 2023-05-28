import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import author from 'Author.js'
import title from 'Title.js'
import img from 'Image.js'



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

 export const Book = (props) => {
   return (
     <div>
      <article className="Book">
    <img src={img} alt={title} />
    <title>{title}</title>
    <section>{author}</section>
    </article>
     </div>
   )
 }



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<BookList />);

