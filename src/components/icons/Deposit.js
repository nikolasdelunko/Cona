import React from "react";

const Deposit = ({color, style}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
			style={style}
		
    >
      <path
        d="M7.00003 1L7.00003 10.2308M7.00003 10.2308L4.23079 7.46158M7.00003 10.2308L9.76926 7.46157M1 8.84613L1 11.1538C1 12.1734 1.82655 13 2.84616 13H11.1538C12.1734 13 13 12.1734 13 11.1538V8.84613"
        stroke={color}
      />
    </svg>
  );
};

export default Deposit;
