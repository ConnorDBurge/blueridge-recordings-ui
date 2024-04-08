export function ReturnIcon({ ...rest }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1.5rem"
      height="1.5rem"
      viewBox="0 0 14 14"
      fill="white"
      {...rest}
    >
      <g
        fill="none"
        stroke="white"
        strokeLinecap="round"
        strokeLinejoin="round"
        {...rest}
      >
        <path d="M.5 9.5h9a4 4 0 1 0 0-8h-3"></path>
        <path d="m3.5 6.5l-3 3l3 3"></path>
      </g>
    </svg>
  );
}
