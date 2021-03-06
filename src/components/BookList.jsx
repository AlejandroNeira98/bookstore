import React from "react";
import { shallowEqual, useSelector } from "react-redux";
import BookItem from "./BookItem";

const BookList = props => {
  const books = useSelector((state) => state.books, shallowEqual);
  return(
    <div className='bookList'>
      {books.map(book => (
        <BookItem title={book.title} author={book.author} key={book.id} id={book.id}/>
      ))}
    </div>
  )
}

export default BookList;