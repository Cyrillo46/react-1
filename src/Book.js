const Book = ({ img, title, author, number }) => {
  return (
    <article className="book">
      <img src={img} alt={title} />
      <h1>{number + 1}</h1>
      <h2>{title}</h2>
      <h4>{author}</h4>
    </article>
  );
};
export default Book;
