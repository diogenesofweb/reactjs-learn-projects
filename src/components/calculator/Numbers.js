import React from "react";

const Numbers = props => {
  const { handleClick } = props;
  const arr = [7, 8, 9, 4, 5, 6, 1, 2, 3, "star", 0, "."];

  const list = arr.map(e => {
    return e === "star" ? (
      <div className="col s4" key={`${e}`}>
        <a href="#!" className="btn-large btn-flat disabled">
          <i className="large material-icons">star</i>
        </a>
      </div>
    ) : (
      <div className="col s4" key={`${e}`}>
        <button value={e} onClick={handleClick} className="btn-large btn-flat">
          {e}
        </button>
      </div>
    );
  });

  return (
    <div className="col s9">
      <div className="row">{list}</div>
    </div>
  );
};

export default Numbers;
