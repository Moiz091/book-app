import React from "react";
import "./App.css";
import Book from "./Book";

const WantToRead = ({ books, changeShelf }) => {
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">Later</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {books.filter((book) => book.shelf === "wantToRead")
            .map((book) => (
              <Book key={book.id} book={book} changeShelf={changeShelf} />
            ))}
        </ol>
      </div>
    </div>
  );
};
export default WantToRead;
