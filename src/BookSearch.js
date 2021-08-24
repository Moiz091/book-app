import React, { useState } from "react";
import "./App.css";
import { Link } from "react-router-dom";
import Book from "./Book";

const BookSearch = ({ submitQuery, searchedBooks, changeShelf }) => {
  const [query, setquery] = useState("");

  const updateQuery = (query) => {
    setquery(query.trim());
  };

  return (
    <div>
      <div className="search-books">
        <div className="search-books-bar">
          <Link to="/" className="close-search">
            Close
          </Link>

          <form
            onChange={(event) => submitQuery(event.target.value)}
            className="search-books-input-wrapper"
          >
            <input
              type="text"
              placeholder="Search by title or author"
              value={query}
              onChange={(event) => updateQuery(event.target.value)}
            />
          </form>
        </div>
        <div className="search-books-results">
          <ol className="books-grid"></ol>
        </div>
      </div>
      <div className="bookshelf">
        <div className="bookshelf-books">
          <ol className="books-grid">
            {searchedBooks.map((book) => (
              <Book key={book.id} book={book} changeShelf={changeShelf} />
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
};
export default BookSearch;
