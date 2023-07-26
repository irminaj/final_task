import React from "react";
import { Label } from "../label/Label";
import { Input } from "../input/Input";
import { FormInputContainerStyle } from "./FormInput.style";

export const FormInput = ({ text, placeholder }) => {
  return (
    <FormInputContainerStyle>
      <Label text={text} />
      <Input placeholder={placeholder} />
    </FormInputContainerStyle>
  );
};
