import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Input } from "../../components/input/Input";
import { FormStyle } from "./UpdateForm.style";
import { Button } from "../../components/button/Button";
import { Link } from "react-router-dom";

export const UpdateForm = () => {
  const { id } = useParams();
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

  useEffect(() => {
    const sendRequest = async () => {
      const response = await fetch(`http://localhost:3000/users/${id}`);
      const responseData = await response.json();
      setValues(responseData);
    };
    sendRequest();
  }, []);

  const updateUser = async () => {
    const response = await fetch(`http://localhost:3000/users/${id}`, {
      method: "PATCH",
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
      alert("User updated successfully!");
      navigate("/");
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    updateUser();
  };

  return (
    <FormStyle onSubmit={handleFormSubmit}>
      <Input name={"firstName"} label={"First Name"} type={"text"} placeholder={"Harry"} value={values.firstName} onChange={handleChange} />
      <Input name={"lastName"} label={"Last Name"} id={"lastName"} type={"text"} placeholder={"Potter"} value={values.lastName} onChange={handleChange} />
      <Input name={"email"} label={"Email"} id={"email"} type={"email"} placeholder={"example@mail.com"} value={values.email} onChange={handleChange} />
      <Input name={"birthDate"} label={"Birth Date"} id={"birthDate"} type={"date"} placeholder={"2000-12-20"} value={values.birthDate} onChange={handleChange} />
      <Button text="Update" type="submit" />
      <Link to={"/"}>
        <Button text={"Back"} />
      </Link>
      {error && <p>{error}</p>}
    </FormStyle>
  );
};
