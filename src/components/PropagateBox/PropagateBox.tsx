import React, { FC, useCallback, useState } from "react";
import Box from "./Box/Box";
import "./PropagateBox.scss";

export const PropagateBox: FC = () => {
  const MAT_SIZE = 4;
  const MAX_SIZE = 9;
  const MIN_SIZE = 4;

  const [matSize, setMatSize] = useState(MAT_SIZE);

  const cols = new Array(matSize).fill(0);
  const rows = new Array(matSize).fill(0);

  const [selectedBox, setSelectedBox] = useState("");
  const [diagonalBoxes, setDiagonalBox] = useState<string[]>([]);

  const handleDec = () => {
    setMatSize((prev) => (prev > 4 ? --prev : prev));
  };

  const handleInc = () => {
    setMatSize((prev) => (prev <= 8 ? ++prev : prev));
  };

  const handleBoxSelection = useCallback(
    (boxId: string) => {
      return boxId === selectedBox;
    },
    [selectedBox]
  );

  const generateDiagonals = (selectedBoxId: string, matrixSize) => {
    const [_, bRow, bCol] = selectedBoxId.split("-");

    const boxRow = parseInt(bRow);
    const boxCol = parseInt(bCol);

    let currRow = boxRow;
    let currCol = boxCol;
    const selection: string[] = [];

    while (currRow < matrixSize && currCol < matrixSize) {
      let generatedId = `box-${++currRow}-${++currCol}`;
      if (selectedBoxId !== generatedId) {
        selection.push(generatedId);
      }
    }

    currRow = boxRow;
    currCol = boxCol;

    while (currRow > 0 && currCol > 0) {
      let generatedId = `box-${--currRow}-${--currCol}`;
      if (selectedBoxId !== generatedId) {
        selection.push(generatedId);
      }
    }

    currRow = boxRow;
    currCol = boxCol;

    while (currRow > 0 && currCol < matrixSize) {
      let generatedId = `box-${--currRow}-${++currCol}`;
      if (selectedBoxId !== generatedId) {
        selection.push(generatedId);
      }
    }

    currRow = boxRow;
    currCol = boxCol;

    while (currRow < matrixSize && currCol > 0) {
      let generatedId = `box-${++currRow}-${--currCol}`;
      if (selectedBoxId !== generatedId) {
        selection.push(generatedId);
      }
    }

    console.log([...new Set(selection)]);
    setDiagonalBox([...new Set(selection)]);
  };

  const handleDiagonalSelection = useCallback(
    (boxId: string) => {
      generateDiagonals(boxId, matSize);
    },
    [selectedBox, matSize]
  );

  const handleBoxClick = (e) => {
    console.log(e.target.id);
    console.log(e.currentTarget);

    setSelectedBox(e.target.id);
    handleDiagonalSelection(e.target.id);
  };

  const getDiagonalClass = useCallback(
    (id) => {
      return diagonalBoxes.includes(id) ? "button-diagonal" : "";
    },
    [diagonalBoxes]
  );

  const getSelectionClass = useCallback(
    (id) => {
      return selectedBox === id ? `button-selected` : "";
    },
    [selectedBox]
  );

  return (
    <div className="propagate-box">
      <h2>Box</h2>
      <div className="box-control">
        <button disabled={matSize === MIN_SIZE} onClick={handleDec}>
          -
        </button>
        <span>{matSize}</span>
        <button disabled={matSize === MAX_SIZE} onClick={handleInc}>
          +
        </button>
      </div>
      <div className="box-container" onClick={handleBoxClick}>
        {rows.map((_, rowInd) => (
          <div className="box-row" key={`row-${rowInd}`}>
            {cols.map((_, colInd) => (
              <Box
                key={`box-${rowInd}-${colInd}`}
                id={`box-${rowInd}-${colInd}`}
                selectionClass={getSelectionClass(`box-${rowInd}-${colInd}`)}
                diagonalBoxClass={getDiagonalClass(`box-${rowInd}-${colInd}`)}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};
