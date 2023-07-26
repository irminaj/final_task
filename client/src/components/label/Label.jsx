import React from "react";
import { LabelStyle } from "./Label.style";

export const Label = (props) => {
  return <LabelStyle>{props.text}</LabelStyle>;
};
