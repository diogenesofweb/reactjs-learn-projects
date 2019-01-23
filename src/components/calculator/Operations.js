import React from "react";

const Operations = props => {
  const { handleClick } = props;
  const operations = ["+", "-", "*", "/"];

  const operRow = operations.map(e => {
    return (
      <div className="col s3" key={`1${e}`}>
        <button
          value={e}
          onClick={handleClick}
          className="btn-floating btn-large btn-flat"
        >
          {e}
        </button>
      </div>
    );
  });
  return (
    <div className="card-action center">
      <div className="row">{operRow}</div>
    </div>
  );
};

export default Operations;
