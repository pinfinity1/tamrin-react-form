/* eslint-disable react/prop-types */
const UserItem = ({ id, name, email, phone, search }) => {
  const index = name.indexOf(search);
  return (
    <li key={id} className="flex border-b p-5">
      <div className="w-60">
        {index === -1 ? (
          name
        ) : (
          <p>
            <span>{name.slice(0, index)}</span>
            <span className="bg-zinc-300">
              {name.slice(index, search.length)}
            </span>
            <span>{name.slice(search.length)}</span>
          </p>
        )}
      </div>
      <div className="w-60">{phone}</div>
      <div className="w-60">{email}</div>
    </li>
  );
};

export default UserItem;
