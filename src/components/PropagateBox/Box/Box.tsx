import React, { useState } from "react";
import "./Box.scss";

interface Props {
  id: string;
  // diagonalBoxes: string[];
  // isBoxSelected: boolean;
  selectionClass: string;
  diagonalBoxClass: string;
}

function Box(props: Props) {
  const { id, diagonalBoxClass, selectionClass } = props;

  return (
    <div className="button-box">
      <button
        id={id}
        className={`
          ${selectionClass}
          ${diagonalBoxClass}
        `}
        onClick={() => {
          console.log(id);
        }}
      />
    </div>
  );
}

export default Box;
