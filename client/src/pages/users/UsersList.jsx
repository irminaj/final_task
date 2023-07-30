import React, { useEffect, useState } from "react";
import { User } from "../../components/user/User";
import { Link } from "react-router-dom";

export const UsersList = () => {
  const [loadedUsers, setLoadedUsers] = useState("");

  useEffect(() => {
    const sendRequest = async () => {
      const response = await fetch("http://localhost:3000/users");
      const responseData = await response.json();
      setLoadedUsers(responseData.users);
    };
    sendRequest();
  }, []);

  // if (loadedUsers.length === 0) {
  //   return <h2>No users found</h2>;
  // }

  return (
    <div>
      <Link to={"/create"}>Add new User</Link>
      {loadedUsers.length > 0 ? (
        <ul>
          {loadedUsers.map((user) => (
            <User key={user._id} id={user._id} firstName={user.firstName} lastName={user.lastName} email={user.email} birthDate={user.birthDate} />
          ))}
        </ul>
      ) : (
        <h2>No user found</h2>
      )}
    </div>
  );
};
