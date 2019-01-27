import React from "react";

const Session = props => {
  const { current, display, seconds, running, handlePlay, handleReset } = props;
  const count =
    display === null ? null : (
      <span>{`${display >= 10 ? display : `0${display}`} : ${
        seconds >= 10 ? seconds : `0${seconds}`
      }`}</span>
    );

  return (
    <div className="row">
      <div className="col s12 m8 offset-m2 l6 offset-l3">
        <div className="card transparent">
          <div className="card-content">
            <h5>{current}</h5>
            {count}
          </div>
          <div className="card-action">
            <a
              href="#!"
              onClick={handlePlay}
              className="btn-large red darken-4 waves-effect waves-red"
            >
              <i className="material-icons black-text">
                {running ? "pause" : "play_arrow"}
              </i>
            </a>
            <a
              href="#!"
              onClick={handleReset}
              className="btn-large red darken-4 waves-effect waves-red"
            >
              <i className="material-icons black-text">replay</i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Session;
