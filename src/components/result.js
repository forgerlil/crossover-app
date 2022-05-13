import React from "react";
import input from "./input";

const Results = ({ props }) => {
  return (
    <>
      <div id="result-field">
        {props.query.amount} {props.query.to}
      </div>
      <div id="ex-txt">{`Exchange rate as of ${props.date}`}</div>
    </>
  );
};

export default Results;
