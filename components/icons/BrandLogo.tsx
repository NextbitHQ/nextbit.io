import React from "react";

const BrandLogo = ({ className }: { className?: string }) => {
  return (
    <svg
      className={className}
      fill="none"
      height="30"
      viewBox="0 0 48 30"
      width="48"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M19.2 0.599976V10.2L9.6 0.599976H0V10.2L19.2 29.4H28.8V19.8L38.4 29.4H48V19.8L38.4 10.2L28.8 0.599976H19.2Z"
        fill="#000"
      />
      <path d="M48 0.599976H38.4V10.2H48V0.599976Z" fill="#000" />
    </svg>
  );
};

export default BrandLogo;
