import React from "react";

const Cross = ({ color }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="26"
      height="26"
      viewBox="0 0 26 26"
      fill="none"
    >
      <path
        d="M17.7193 8.87094L8.58127 18.0089M17.7193 18.009L8.58135 8.87102M21.6355 4.95466C26.3218 9.64095 26.3218 17.2389 21.6355 21.9252C16.9493 26.6115 9.35128 26.6115 4.66499 21.9252C-0.0213044 17.2389 -0.0213044 9.64095 4.66499 4.95466C9.35128 0.268368 16.9493 0.268368 21.6355 4.95466Z"
        stroke={color}
      />
    </svg>
  );
};

export default Cross;
