import React, { useId } from "react";

const Input = ({ label,labelClassName, type, className = "", error, ...props }) => { // No ref needed
  const id = useId();
  return (
    <div className="w-full">
      {label && (
        <label htmlFor={id} className={`inline-block mb-1 pl-1 ${labelClassName}` }>
          {label}
        </label>
      )}
      <input
        type={type}
        id={id}
        className={`px-2 rounded-lg bg-white text-black outline-none  duration-200 border  w-full ${className} ${error ? 'border-red-500' : ''}`}
        {...props} // All other props including react-hook-form's register are passed here
      />
      {error && <small className="text-red-500 text-[12px] mt-0">{error}</small>}

    </div>
  );
};

export default Input; // No forwardRef needed