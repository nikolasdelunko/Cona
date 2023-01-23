import React from "react";

const Search = ({ left = "90%" }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="13"
      height="12"
      viewBox="0 0 13 12"
      fill="none"
      style={{ position: "absolute", left: left }}
    >
      <path
        d="M10.5216 9.5171L12.2097 11.2484C12.2884 11.3321 12.332 11.4441 12.331 11.5604C12.33 11.6767 12.2846 11.7879 12.2044 11.8701C12.1243 11.9523 12.0159 11.999 11.9026 12C11.7893 12.001 11.6801 11.9563 11.5986 11.8755L9.91045 10.1433C8.8073 11.1131 7.38095 11.6068 5.9307 11.5208C4.48045 11.4348 3.11904 10.7757 2.13213 9.68192C1.14523 8.58811 0.609559 7.14459 0.637516 5.65425C0.665474 4.16392 1.25489 2.74261 2.28208 1.68859C3.30928 0.634568 4.6944 0.0297569 6.1468 0.00106901C7.5992 -0.0276189 9.00598 0.522047 10.0719 1.53473C11.1379 2.5474 11.7802 3.94438 11.864 5.43251C11.9479 6.92064 11.4667 8.38424 10.5216 9.51621V9.5171ZM6.255 10.6435C7.51586 10.6435 8.72508 10.1296 9.61664 9.21472C10.5082 8.29987 11.0091 7.05907 11.0091 5.76528C11.0091 4.47149 10.5082 3.23068 9.61664 2.31583C8.72508 1.40098 7.51586 0.887027 6.255 0.887027C4.99414 0.887027 3.78492 1.40098 2.89336 2.31583C2.0018 3.23068 1.50092 4.47149 1.50092 5.76528C1.50092 7.05907 2.0018 8.29987 2.89336 9.21472C3.78492 10.1296 4.99414 10.6435 6.255 10.6435Z"
        fill="#FF6E00"
        fillOpacity="0.62"
      />
    </svg>
  );
};

export default Search;
