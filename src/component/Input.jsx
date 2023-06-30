/* eslint-disable react/prop-types */
import clsx from "clsx";
const Input = ({ value, type, onChange, className, ...props }) => {
  return (
    <input
      value={value}
      type={type}
      onChange={onChange}
      {...props}
      className={clsx(
        "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 mr-3 mb-4 w-1/4",
        className
      )}
    />
  );
};

export default Input;
