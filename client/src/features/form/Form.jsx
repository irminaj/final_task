import React, { useState } from "react";
import { Input } from "../../components/input/Input";
import { Button } from "../../components/button/Button";
import { FormStyle } from "./Form.style";
import { useNavigate } from "react-router-dom";

export const Form = () => {
  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    birthDate: "",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const submitUser = async () => {
    const response = await fetch("http://localhost:3000/users", {
      method: "POST",
      body: JSON.stringify({
        firstName: values.firstName,
        lastName: values.lastName,
        email: values.email,
        birthDate: values.birthDate,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const result = await response.json();
    if (!response.ok) {
      setError(result.error);
    }
    if (response.ok) {
      setError(null);
      console.log(result);
      navigate("/");
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    submitUser();
    console.log(values);
  };

  return (
    <FormStyle onSubmit={handleFormSubmit}>
      <Input name={"firstName"} label={"First Name"} type={"text"} placeholder={"Harry"} value={values.firstName} onChange={handleChange} />
      <Input name={"lastName"} label={"Last Name"} id={"lastName"} type={"text"} placeholder={"Potter"} value={values.lastName} onChange={handleChange} />
      <Input name={"email"} label={"Email"} id={"email"} type={"email"} placeholder={"example@mail.com"} value={values.email} onChange={handleChange} />
      <Input name={"birthDate"} label={"Birth Date"} id={"birthDate"} type={"date"} placeholder={"2000-12-20"} value={values.birthDate} onChange={handleChange} />
      <Button text="Submit" type="submit" />
      {error && <p>{error}</p>}
    </FormStyle>
  );
};
