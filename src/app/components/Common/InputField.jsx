import React from "react";
const InputField = ({
  id,
  name,
  label,
  value,
  onChange,
  type = "text",
  placeholder = "",
  error = false,
  errorText = "",
  readOnly = false,
  style=null,
  maxLength,
  disable = false,
}) => {
  

  return (
    <div className="w-full">
      {label && (
        <div className="flex items-center gap-1 ">
          <label
            htmlFor={id}
            className="text-sm  font-medium text-gray-700 sm:w-40 py-1"
          >
            {label}
          </label>
          
        </div>
      )}

      <input
        id={id}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        readOnly={readOnly}
        style={style}
        maxLength={maxLength}
        className={`block w-full  p-1.5 h-[2.275rem] border bg-white rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-cyan-500 text-sm   ${
          error ? "border-red-500" : "border-gray-300"
        }`}
        disabled={disable}
      />

      {error && <p className="mt-1 text-sm text-red-500">{errorText}</p>}
    </div>
  );
};

export default InputField;