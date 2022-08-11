import React from "react";

export default function TableField({ fieldName, settingsField, removeBook }) {
  return (
    <div className="tableField">
      {fieldName}
      {settingsField && (
        <>
          <i className="fa-solid fa-pen-to-square"></i>
          <i onClick={removeBook} className="fa-solid fa-trash-can"></i>
        </>
      )}
    </div>
  );
}
