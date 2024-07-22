import React from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  inputType?: string;
  inputname: string;
  id: string;
  label: string;
  isTextArea: boolean;
  className?: string;
  placeholder: string;
  rows?: number;
}

const InputClasses =
  "w-full p-3 rounded-lg focus:outline-none focus:ring-0 focus:border-contactBorder border-[3px] border-transparent";

const CustomInput: React.FC<InputProps> = ({
  inputname,
  id,
  label,
  inputType,
  placeholder,
  isTextArea,
  rows = 6,
  className = "",
}) => {
  return (
    <div className="mb-4">
      {label && (
        <label
          htmlFor={inputname}
          className="block mb-2 text-[19px] font-medium text-mainWhite "
        >
          {label}
        </label>
      )}
      {isTextArea ? (
        <textarea
          name={inputname}
          id={id}
          rows={rows}
          className={`${className} ${InputClasses}`}
          placeholder={placeholder}
        />
      ) : (
        <input
          type={inputType}
          name={inputname}
          id={id}
          className={`${className} ${InputClasses}`}
          placeholder={placeholder}
          required
        />
      )}
    </div>
  );
};

export default CustomInput;
