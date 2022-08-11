import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

// components
import Form from "./components/Form";
import Table from "./components/Table";

// styles
import "./App.css";

function App() {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [isbn, setIsbn] = useState("");
  const [currBookId, setCurrBookId] = useState(null);
  const [books, setBooks] = useState([
    {
      bookTitle: "Different Seasons",
      bookAuthor: "Stephen King",
      bookIsbn: 51546,
      bookId: uuidv4(),
    },
  ]);

  const addBook = () => {
    setBooks([
      ...books,
      {
        bookTitle: title,
        bookAuthor: author,
        bookIsbn: +isbn,
        bookId: uuidv4(),
      },
    ]);
  };

  const isInputInvalid = () => {
    return title.trim() === "" || author.trim() === "" || isbn === null;
  };

  const clearInputs = () => {
    setTitle("");
    setAuthor("");
    setIsbn("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    clearInputs();
    setCurrBookId(null);
    if (isInputInvalid()) return;
    !currBookId ? addBook() : updateBook();
  };

  const removeBook = (id) => {
    setBooks(books.filter((book) => book.bookId !== id));
  };

  const editBook = (book) => {
    setTitle(book.bookTitle);
    setAuthor(book.bookAuthor);
    setIsbn(book.bookIsbn);
    setCurrBookId(book.bookId);
  };

  const updateBook = () => {
    setBooks(
      books.map((book) =>
        book.bookId === currBookId
          ? {
              bookTitle: title,
              bookAuthor: author,
              bookIsbn: +isbn,
              bookId: book.bookId,
            }
          : book
      )
    );
  };
  console.log(books);

  const cancelEdit = () => {
    clearInputs();
    setCurrBookId(null);
  };

  return (
    <div className="App">
      <div className="container">
        <Form
          title={title}
          setTitle={setTitle}
          author={author}
          setAuthor={setAuthor}
          isbn={isbn}
          setIsbn={setIsbn}
          currBookId={currBookId}
          handleSubmit={handleSubmit}
          cancelEdit={cancelEdit}
        />
        <Table books={books} removeBook={removeBook} editBook={editBook} />
      </div>
    </div>
  );
}

export default App;
