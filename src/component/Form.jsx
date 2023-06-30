/* eslint-disable react/prop-types */

import Input from "./Input";
import Button from "./Button";
import { useState } from "react";
import UserList from "./UserList";

const Form = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const handleNameInput = (e) => {
    setName(e.target.value);
  };
  const handlePhoneInput = (e) => {
    setPhone(e.target.value);
  };
  const handleEmailInput = (e) => {
    setEmail(e.target.value);
  };

  const submitFormHandler = (e) => {
    e.preventDefault();
    if (name.trim() && phone.trim() && email.trim()) {
      setUsers([
        ...users,
        { id: users.length + 1, name: name, phone: phone, email: email },
      ]);
      setName("");
      setEmail("");
      setPhone("");
    } else {
      alert("Please Fill Out The Form");
    }
  };
  const handleSearchTerm = (e) => {
    setSearchTerm(e.target.value);
  };
  return (
    <form onSubmit={submitFormHandler}>
      <Input
        value={searchTerm}
        type={"search"}
        onChange={handleSearchTerm}
        placeholder="Search"
        className={"block w-4/6"}
      />
      <div className="">
        <Input
          value={name}
          type={"text"}
          onChange={handleNameInput}
          placeholder="Name"
        />
        <Input
          value={phone}
          type={"tel"}
          onChange={handlePhoneInput}
          placeholder="Phone"
        />
        <Input
          value={email}
          type={"email"}
          onChange={handleEmailInput}
          placeholder="Email"
        />
        <Button type={"submit"} />
      </div>
      <UserList users={users} search={searchTerm} />
    </form>
  );
};

export default Form;
