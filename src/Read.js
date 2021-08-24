import React from "react";
import "./App.css";
import Book from "./Book";

const Read = ({ books, changeShelf }) => {
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">Read</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {books
            .filter((book) => book.shelf === "read")
            .map((book) => (
              <Book key={book.id} book={book} changeShelf={changeShelf} />
            ))}
        </ol>
      </div>
    </div>
  );
};

export default Read;
