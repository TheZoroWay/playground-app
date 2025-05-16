import {
  exceptions,
  ExceptionTypeMap,
  IssuanceTypeMap,
  IssuanceSiteMap,
  Markets,
} from "../../dataSource/exceptions";
import { useState, useMemo, memo, useRef } from "react";
import "./exceptionRow.scss";

export const ExceptionRow = memo(
  ({   
    updateSelections,
    selectionRow,
    selection,
    onCancel,
    isCancelDisabled,
    getAvailableExceptionTypes,
  }) => {
    const [selectedExceptionType, setSelectedExceptionType] = useState(
      selection?.type || null
    );
    const [selectedIssuanceSite, setSelectedIssuanceSite] = useState(
      selection?.IssuanceSite || null
    );
    const [selectedMarket, setSelectedMarket] = useState(
      selection.selectedMarket || null
    );

    const availableExceptionTypes = useRef(getAvailableExceptionTypes());


    const issuanceType = useMemo(() => {
      if (!selectedExceptionType) {
        return "";
      }
      return exceptions.find(
        (exception) => exception.type === selectedExceptionType
      ).issuanceType;
    }, [selectedExceptionType]);

    const issuanceSites = useMemo(() => {
      if (!selectedExceptionType) {
        return [];
      }
      const availableSites = [
        ...new Set(
          exceptions
            .filter((exception) => exception.type === selectedExceptionType)
            .map((fe) => fe.issuanceSite)
        ),
      ].sort();
      console.log(availableSites);
      return availableSites;
    }, [selectedExceptionType]);

    const supportedMarkets = useMemo(() => {
      if (!selectedExceptionType) {
        return [];
      }
      const availableSites = [
        ...new Set(
          exceptions
            .filter(
              (exception) =>
                exception.type === selectedExceptionType &&
                exception.issuanceSite === selectedIssuanceSite
            )
            .map((fe) => fe.supportedMarkets)
            .flat()
        ),
      ].sort();
      console.log(availableSites);
      return availableSites;
    }, [selectedExceptionType, selectedIssuanceSite]);

    //   const resetSelections = () => {
    //     setSelectedExceptionType("");
    //     setSelectedIssuanceSite("");
    //     setSelectedMarket("");
    //   };

    const onAddSelections = () => {
      updateSelections(
        selectedExceptionType,
        selectedIssuanceSite,
        selectedMarket
      );
    };

    return (
      <div className="row">
        <div className="control">
          <label for="exception type">Exception Type</label>
          <select
            name="exception type"
            id="exception_type"
            data-testId="exception_type"
            value={selectedExceptionType || ""}
            onChange={(e) => {
              e.preventDefault();
              setSelectedExceptionType(e.target.value);
            }}
          >
            <option value={"default"}>{"Select"}</option>
            {availableExceptionTypes.current.map((type) => (
              <option value={type}>{ExceptionTypeMap[type]}</option>
            ))}
          </select>
        </div>
        <div className="control">
          <label for="issuance type">Issuance Type</label>
          <input
            name="issuance type"
            id="issuance_type"
            data-testId="issuance_type"
            value={IssuanceTypeMap[issuanceType] || ""}
            disabled
            onChange={(e) => {
              e.preventDefault();
              setSelectedExceptionType(e.target.value);
            }}
          />
        </div>
        <div className="control">
          <label for="issuance sites">Issuance Sites</label>
          <select
            name="issuance sites"
            id="issuance_sites"
            data-testId="issuance_sites"
            value={selectedIssuanceSite || ""}
            onChange={(e) => {
              e.preventDefault();
              setSelectedIssuanceSite(e.target.value);
            }}
          >
            <option value={"default"}>{"Select"}</option>
            {issuanceSites.map((type) => (
              <option value={type}>{IssuanceSiteMap[type]}</option>
            ))}
          </select>
        </div>
        <div className="control">
          <label for="supported markets">Supported Markets</label>
          <select
            name="supported markets"
            id="supported_markets"
            data-testId="supported_markets"
            value={selectedMarket || ""}
            onChange={(e) => {
              e.preventDefault();
              setSelectedMarket(e.target.value);
            }}
          >
            <option value={"default"}>{"Select"}</option>
            {supportedMarkets.map((sm) => (
              <option value={sm}>
                {Markets.find((market) => market.id === sm).market}
              </option>
            ))}
          </select>
        </div>
        <div className="control control-button">
          <button
            onClick={onAddSelections}
            className="add"
            disabled={
              !selectedExceptionType || !selectedIssuanceSite || !selectedMarket
            }
          >
            +
          </button>
          <button
            className="cancel"
            disabled={isCancelDisabled}
            onClick={() => onCancel(selectionRow)}
          >
            x
          </button>
        </div>
      </div>
    );
  }
);
