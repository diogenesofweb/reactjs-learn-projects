// ra
import React from "react";

const Rainbow = WrappedComponent => {
  const colors = [
    "indigo",
    "red",
    "pink",
    "purple",
    "blue",
    "cyan",
    "teal",
    "green",
    "lime",
    "yellow",
    "amber",
    "orange",
    "brown"
  ];
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  const classColorText = randomColor + "-text text-lighten-2";

  return props => {
    return (
      <div className={classColorText}>
        <WrappedComponent {...props} />
      </div>
    );
  };
};

export default Rainbow;
