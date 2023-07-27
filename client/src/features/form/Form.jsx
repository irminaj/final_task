import React, { useState } from "react";
import { Input } from "../../components/input/Input";
import { Button } from "../../components/button/Button";
import { FormStyle } from "./Form.style";

export const Form = () => {
  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    birthDate: "",
  });

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    console.log(values);
  };

  return (
    <FormStyle onSubmit={handleFormSubmit}>
      <Input name={"firstName"} label={"First Name"} type={"text"} placeholder={"Harry"} value={values.firstName} onChange={handleChange} />
      <Input name={"lastName"} label={"Last Name"} id={"lastName"} type={"text"} placeholder={"Potter"} value={values.lastName} onChange={handleChange} />
      <Input name={"email"} label={"Email"} id={"email"} type={"email"} placeholder={"example@mail.com"} value={values.email} onChange={handleChange} />
      <Input name={"birthDate"} label={"Birth Date"} id={"birthDate"} type={"text"} placeholder={"2000-12-20"} value={values.birthDate} onChange={handleChange} />
      <Button text="Submit" type="submit" />
    </FormStyle>
  );
};
