import React from "react";
import { Button } from "../button/Button";
import { TableRowStyle, TableDataStyle, TableButtonStyle } from "./User.style";
import { Link } from "react-router-dom";

export const User = (props) => {
  const deleteUser = async (id) => {
    await fetch(`http://localhost:3000/users/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .catch((error) => console.error(error));
    window.location.reload(true);
  };

  return (
    <TableRowStyle id={props.id}>
      <TableDataStyle>{props.firstName}</TableDataStyle>
      <TableDataStyle>{props.lastName}</TableDataStyle>
      <TableDataStyle>{props.email}</TableDataStyle>
      <TableDataStyle>{props.birthDate}</TableDataStyle>
      <TableButtonStyle>
        <Link to={`/update/${props.id}`}>
          <Button text={"Edit"} />
        </Link>
        <Button onClick={() => deleteUser(props.id)} text={"Delete"} />
      </TableButtonStyle>
    </TableRowStyle>
  );
};
