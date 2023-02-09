import React from "react";

const OkLine = ({ color }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
    >
      <path
        d="M17 9C17 13.4183 13.4183 17 9 17C4.58172 17 1 13.4183 1 9C1 4.58172 4.58172 1 9 1C13.4183 1 17 4.58172 17 9Z"
        stroke={color}
      />
      <path
        d="M5.11719 8.15802L8.48561 11.9475L12.8833 6.3335"
        stroke={color}
      />
    </svg>
  );
};

export default OkLine;
