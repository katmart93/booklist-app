import React from "react";

export default function Form() {
  return (
    <form>
      <label htmlFor="title">Title</label>
      <input type="text" id="title" name="title" />
      <label htmlFor="author">Author</label>
      <input type="text" id="author" name="author" />
      <label htmlFor="isbn">ISBN#</label>
      <input type="text" id="isbn" name="isbn" />
    </form>
  );
}
