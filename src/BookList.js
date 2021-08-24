import React from "react";
import "./App.css";
import { Link } from "react-router-dom";
import CurrentlyReading from "./CurrentlyReading";
import WantToRead from "./WantToRead";
import Read from "./Read";

const BookList = ({ books, changeShelf }) => {
  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>Book Centre</h1>
      </div>
      <div className="list-books-content">
        <div>
          <CurrentlyReading changeShelf={changeShelf} books={books} />
        </div>
        <div>
          <WantToRead changeShelf={changeShelf} books={books} />
        </div>
        <div>
          <Read changeShelf={changeShelf} books={books} />
        </div>
      </div>

      <div className="open-search">
        <Link to="/search">Add a book</Link>
      </div>
    </div>
  );
};

export default BookList;
