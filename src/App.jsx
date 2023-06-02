import Card from "./components/Card";
import { useSelector, useDispatch } from "react-redux";
import { addUser } from "./features/Users";
import { useState } from "react";

function App() {
  const dispatch = useDispatch();
  const userList = useSelector((state) => state.users.value);

  const [name, setName] = useState("");
  const [username, setUsername] = useState("");

  return (
    <>
      <div className="flex flex-col justify-center items-center ">
        <div className="flex gap-4 mt-5">
          <input
            className="border rounded-md outline-none p-2"
            type="text"
            placeholder="Name"
            onChange={(e) => setName(e.target.value)}
          />
          <input
            className="border rounded-md outline-none p-2"
            type="text"
            placeholder="Username"
            onChange={(e) => setUsername(e.target.value)}
          />
          <button
            className="bg-green-500 px-3 rounded-md text-white hover:bg-green-600 ml-2 mr-2"
            type="submit"
            onClick={() =>
              dispatch(
                addUser({
                  id: userList[userList.length - 1].id + 1,
                  name,
                  username,
                })
              )
            }
          >
            Add User
          </button>
        </div>

        <div className="flex justify-center flex-wrap mt-4">
          {userList
            .map((user) => (
              <div key={user.id}>
                <Card user={user} />
              </div>
            ))
            .reverse()}
        </div>
      </div>
    </>
  );
}

export default App;
