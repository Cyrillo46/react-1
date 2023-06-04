import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Book from "./Book.js";
import Books from "./Books.js";

const BookList = () => {
  const getBook = (id) => {
    const books = Book.find((book) => book.id === id);
    console.log(books);
  };
  return (
    <section className="booklist">
      {Books.map((book, idx) => {
        return <Book {...book} getBook={getBook} number={idx} />;
      })}
    </section>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<BookList />);
