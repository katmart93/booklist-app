import React from "react";

export default function TableField({ fieldName }) {
  return (
    <div className="tableField">
      {fieldName}
      <i className="fa-solid fa-pen-to-square"></i>
      <i className="fa-solid fa-trash-can"></i>
    </div>
  );
}
