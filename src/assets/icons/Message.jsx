const Message = (props) => {
  return (
    <div className="relative">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="-3 -2 24 24"
        width="28"
        fill="currentColor"
        className={`mt-2 ${props.className}`}
      >
        <path d="M10.01 15.959c-.186.018-1.626 1.276-4.321 3.774a1 1 0 0 1-1.68-.742c.02-2.362.011-3.709-.024-4.04-.018-.173.032-.28 0-.3C1.708 13.212 0 10.775 0 8.005 0 3.584 4.03 0 9 0s9 3.584 9 8.004c0 4.117-3.495 7.509-7.99 7.955z"></path>
      </svg>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="30"
        height="30"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#3B5D50"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 lucide lucide-check"
      >
        <path d="M20 6 9 17l-5-5" />
      </svg>
    </div>
  );
}

export default Message