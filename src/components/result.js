import React from "react";

const Results = ({ props }) => {
  console.log(props);
  return (
    <div>
      <div id="result-field">
        {props.result} {props.query.to}
      </div>
      <div id="ex-txt">{`Exchange rate as of ${props.date}`}</div>
    </div>
  );
};

export default Results;
