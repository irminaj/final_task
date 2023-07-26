import React from "react";
import { ButtonStyle } from "./Button.style";

export const Button = (props) => {
  return <ButtonStyle {...props}>{props.text}</ButtonStyle>;
};
