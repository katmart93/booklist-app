import React from "react";

export default function TableField({ fieldName, settingsField }) {
  return (
    <div className="tableField">
      {fieldName}
      {settingsField && (
        <>
          <i className="fa-solid fa-pen-to-square"></i>
          <i className="fa-solid fa-trash-can"></i>
        </>
      )}
    </div>
  );
}
