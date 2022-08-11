import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

// styles
import "./App.css";

function App() {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [isbn, setIsbn] = useState("");
  const [currBookId, setCurrBookId] = useState(null);
  const [books, setBooks] = useState([
    {
      bookTitle: title,
      bookAuthor: author,
      bookIsbn: isbn,
      id: uuidv4(),
    },
  ]);

  return (
    <div className="App">
      <div className="container"></div>
    </div>
  );
}

export default App;
