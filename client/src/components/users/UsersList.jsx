import React, { useEffect, useState } from "react";
import { User } from "../../components/user/User";
import { Link } from "react-router-dom";
import { TableHeaderStyle, TableStyle, TableRowStyle, UsersTableTextStyle } from "./UsersList.style";

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

  return (
    <div>
      {loadedUsers.length > 0 ? (
        <TableStyle>
          <TableRowStyle>
            <TableHeaderStyle>Name</TableHeaderStyle>
            <TableHeaderStyle>Last name</TableHeaderStyle>
            <TableHeaderStyle>Email</TableHeaderStyle>
            <TableHeaderStyle>Age</TableHeaderStyle>
            <TableHeaderStyle>Actions</TableHeaderStyle>
          </TableRowStyle>
          {loadedUsers.map((user) => (
            <User key={user._id} id={user._id} firstName={user.firstName} lastName={user.lastName} email={user.email} birthDate={user.birthDate} />
          ))}
        </TableStyle>
      ) : (
        <UsersTableTextStyle>No user found</UsersTableTextStyle>
      )}
    </div>
  );
};
