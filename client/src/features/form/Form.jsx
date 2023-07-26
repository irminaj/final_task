import React from "react";
import { FormInput } from "../../components/formInput/FormInput";
import { Button } from "../../components/button/Button";
import { FormStyle } from "./Form.style";

export const Form = () => {
  return (
    <FormStyle>
      <FormInput text={"First Name"} placeholder={"Harry"} />
      <FormInput text={"Last Name"} placeholder={"Potter"} />
      <FormInput text={"Email"} placeholder={"example@mail.com"} />
      <FormInput text={"Birth Date"} placeholder={"2000-12-20"} />
      <Button text="Submit" />
    </FormStyle>
  );
};
