import React from "react";

export const User = (props) => {
  return (
    <li>
      <div>
        <p>{props.firstName}</p>
        <p>{props.lastName}</p>
      </div>
    </li>
  );
};
