/* eslint-disable react/prop-types */
import UserItem from "./UserItem";
import { FaUserLarge, FaPhone } from "react-icons/fa6";
import { AiFillMail } from "react-icons/ai";

const UserList = ({ users, search }) => {
  return (
    <div>
      <ul>
        <li className="flex mt-10 p-3 border-y shadow-sm">
          <div className="flex items-center">
            <FaUserLarge />
            <p className="w-60 font-bold ml-2">Name</p>
          </div>
          <div className="flex items-center">
            <FaPhone />
            <p className="w-60 font-bold ml-2">Phone</p>
          </div>
          <div className="flex items-center">
            <AiFillMail />
            <p className="w-60 font-bold ml-2">Email</p>
          </div>
        </li>
        {users
          .filter(({ name }) => name.startsWith(search))
          .map(({ id, name, phone, email }) => (
            <UserItem
              key={id}
              search={search}
              name={name}
              phone={phone}
              email={email}
            />
          ))}
      </ul>
    </div>
  );
};
export default UserList;
