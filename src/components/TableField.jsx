import React from "react";

export default function TableField({
  fieldName,
  settingsField,
  removeBook,
  editBook,
}) {
  return (
    <div className="tableField">
      {fieldName}
      {settingsField && (
        <>
          <i onClick={editBook} className="fa-solid fa-pen-to-square"></i>
          <i onClick={removeBook} className="fa-solid fa-trash-can"></i>
        </>
      )}
    </div>
  );
}
