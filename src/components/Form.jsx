import React from "react";

export default function Form({
  title,
  setTitle,
  author,
  setAuthor,
  isbn,
  setIsbn,
  currBookId,
  handleSubmit,
  cancelEdit,
}) {
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="title">Title</label>
      <input
        type="text"
        id="title"
        name="title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <label htmlFor="author">Author</label>
      <input
        type="text"
        id="author"
        name="author"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
      />
      <label htmlFor="isbn">ISBN#</label>
      <input
        type="text"
        id="isbn"
        required
        name="isbn"
        value={isbn}
        onChange={(e) => setIsbn(e.target.value)}
      />
      <button tabIndex="0" type="submit">
        {currBookId !== null ? "Update" : "Add"}
      </button>
      {currBookId !== null && <button onClick={cancelEdit}>Cancel</button>}
    </form>
  );
}
