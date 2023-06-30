/* eslint-disable react/prop-types */
import { FaPlus } from "react-icons/fa6";

const Button = ({ type }) => {
  return (
    <button type={type} className='bg-blue-600 hover:bg-blue-700 p-2.5 text-sm rounded-lg text-white'>
      <FaPlus className="mr-1 inline-block"/>
      Add
    </button>
  );
};

export default Button;
