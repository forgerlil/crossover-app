import React from "react";

const Results = ({ props }) => {
  return (
    <div id="result-field">
      <div>
        {props.query.amount} {props.query.to}
      </div>
      <div id="ex-txt">{`Exchange rate as of ${props.date}`}</div>
    </div>
  );
};

export default Results;
