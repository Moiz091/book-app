import React from "react";
import "./App.css";

const Book = ({ book, changeShelf }) => {
  const checkThumbnailExists = (book) => {
    if (book.imageLinks.thumbnail) {
      return (
        <div
          className="book-cover"
          key={book.imageLinks.thumbnail}
          style={{ backgroundImage: `url(${book.imageLinks.thumbnail})` }}
          alt="book cover"
        ></div>
      );
    }
  };

  return (
    <li key={book.id}>
      <div className="book">
        <div className="book-top">
          {checkThumbnailExists(book)}
          <div className="book-shelf-changer">
            <select
              onChange={(event) => changeShelf(book, event.target.value)}
              defaultValue={book.shelf}
            >
              <option value="currentlyReading">Reading</option>
              <option value="wantToRead">Later</option>
              <option value="read">Read</option>
              <option value="none">None</option>
            </select>
          </div>
        </div>
        <div className="book-title" key={book.title}>
          {book.title}
        </div>
        <div className="book-authors" key={book.authors}>
          {book.authors && book.authors.join(", ")}
        </div>
      </div>
    </li>
  );
};

export default Book;
