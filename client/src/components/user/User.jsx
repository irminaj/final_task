import React from "react";
import { Button } from "../button/Button";

export const User = (props) => {
  const deleteUser = (id) => {
    fetch(`http://localhost:3000/users/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((error) => console.error(error));
    window.location.reload(true);
  };

  return (
    <li id={props.id}>
      <div>
        <p>{props.firstName}</p>
        <p>{props.lastName}</p>
        <p>{props.email}</p>
        <p>{props.birthDate}</p>
        <Button onClick={() => deleteUser(props.id)} text={"Delete"} />
        <Button onClick={props.editAction} text={"Edit"} />
      </div>
    </li>
  );
};
