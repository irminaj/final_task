import React from "react";
import { InputContainerStyle, InputStyle, LabelStyle } from "./Input.style";

export const Input = (props) => {
  return (
    <InputContainerStyle>
      <LabelStyle htmlFor={props.name}>{props.label}</LabelStyle>
      <InputStyle {...props} name={props.name} type={props.type} placeholder={props.placeholder} value={props.value} onChange={props.onChange} />
    </InputContainerStyle>
  );
};
