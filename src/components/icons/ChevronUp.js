import React from "react";

const ChevronUp = ({ color }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="10"
      height="10"
      viewBox="0 0 10 10"
      fill="none"
    >
      <path d="M9 0.666252L4.4986 8.62146L1 3.90743" stroke={color} />
    </svg>
  );
};

export default ChevronUp;
