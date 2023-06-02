import { deleteUser, updateUser } from "../features/Users";
import { useDispatch } from "react-redux";
import { useState } from "react";

const Card = ({ user }) => {
  const dispatch = useDispatch();

  const [username, setUsername] = useState("");

  return (
    <div className="flex flex-col border m-4 px-4 py-4 shadow-lg shadow-gray-400 rounded-md  ">
      <h3 className="text-3xl mb-2">{user.name}</h3>
      <h4 className="mb-2">{user.username}</h4>
      <div>
        <input
          className="border rounded-md p-1 outline-none"
          type="text"
          placeholder="new username"
          onChange={(e) => setUsername(e.target.value)}
        />
        <button
          className="bg-sky-500 px-3 rounded-md text-white hover:bg-sky-600 ml-2 mr-2 p-1"
          onClick={() => dispatch(updateUser({ id: user.id, username }))}
        >
          Update
        </button>
        <button
          className="bg-red-500 px-3 rounded-md text-white hover:bg-red-600 ml-2 mr-2 p-1"
          onClick={() => dispatch(deleteUser({ id: user.id }))}
        >
          Delete
        </button>
      </div>
    </div>
  );
};
export default Card;
