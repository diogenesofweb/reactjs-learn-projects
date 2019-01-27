import React from "react";

const Length = props => {
  const { compName, length, handleClick } = props;

  return (
    <div className="col s12 l5">
      <h5 className="len">{compName} Length</h5>
      <div className="row">
        <div className="col s5">
          <a
            href="#!"
            className="btn-large red darken-4 waves-effect waves-red right"
            onClick={() => handleClick("add", `${compName}`)}
          >
            <i className="material-icons black-text">add</i>
          </a>
        </div>
        <div className="col s2">
          <span>{length >= 10 ? length : `0${length}`}</span>
        </div>
        <div className="col s5">
          <a
            href="#!"
            className="btn-large red darken-4 waves-effect waves-red left"
            onClick={() => handleClick("remove", `${compName}`)}
          >
            <i className="material-icons black-text">remove</i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Length;
