import React from 'react';

const Button = ({ children, onClick, type = 'button' }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className="bg-[#003A75] hover:bg-[#1D5BA6] text-white px-6 py-2 rounded-full text-sm font-medium transition-colors duration-200"
    >
      {children}
    </button>
  );
};

export default Button;
