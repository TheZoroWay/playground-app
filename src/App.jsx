import "./App.css";
import { useState, useMemo, useCallback } from "react";
import { ExceptionRow } from "./components/exceptionRow/exceptionRow";
import { exceptions } from "./dataSource/exceptions";
import { PropagateBox } from "./components/PropagateBox/PropagateBox";
import { Route, Link, Routes } from "react-router";
function App() {
  const [selections, setSelections] = useState([
    {
      type: "",
      issuanceSite: "",
      selectedMarket: "",
    },
  ]);

  const totalExceptionTypes = useMemo(() => {
    return [...new Set(exceptions.map((exception) => exception.type))].sort();
  }, []);

  const getAvailableExceptionTypes = useCallback(
    () =>
      totalExceptionTypes.filter(
        (tet) => !selections.map((s) => s.type).includes(tet)
      ),
    [selections]
  );

  const handleSelections = (
    selectedExceptionType,
    selectedIssuanceSite,
    selectedMarket
  ) => {
    setSelections((prev) => {
      return [
        ...prev,
        {
          type: selectedExceptionType,
          issuanceSite: selectedIssuanceSite,
          selectedMarket: selectedMarket,
        },
      ];
    });
  };

  const handleCancel = (index) => {
    setSelections((prev) => prev.toSpliced(index, 1));
  };

  // const [selectedOption, setSelectedOption] = useState("");
  // const handleTestSelection = (e) => {
  //   console.log(e);
  //   setSelectedOption(e.target.value);
  // };

  // const handleReset = () => {
  //   setSelectedOption("");
  // };

  return (
    <>
      <div>
        <ul className="nav">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/propagate-box">Propagate Box</Link>
          </li>
          <li>
            <Link to="/exceptions">Exceptions</Link>
          </li>
        </ul>
      </div>
      <Routes>
        <Route path="/propagate-box" element={<PropagateBox />} />
        <Route
          path="/exceptions"
          element={selections.map((exception, index) => (
            <ExceptionRow
              key={index}
              selections={selections.length ? selections : []}
              selectionRow={index}
              selection={selections.length ? selections.at(index) : null}
              isCancelDisabled={Boolean(!selections.length)}
              onCancel={handleCancel}
              updateSelections={handleSelections}
              getAvailableExceptionTypes={getAvailableExceptionTypes}
              totalExceptionTypes={totalExceptionTypes}
            />
          ))}
        />
      </Routes>
    </>
  );
}

export default App;
