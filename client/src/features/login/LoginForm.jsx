import React, { useState } from "react";
import { Input } from "../../components/input/Input";
import { Button } from "../../components/button/Button";
import { LoginFormHeadingStyle, LoginFormStyle } from "./LoginForm.style";

export const LoginForm = () => {
  const [values, setValues] = useState({
    username: "",
    password: "",
  });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const login = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:3000/admin/login", {
      method: "POST",
      body: JSON.stringify({
        username: values.username,
        password: values.password,
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
      localStorage.setItem("admin", JSON.stringify(result));
      window.location.reload();
    }
  };

  return (
    <LoginFormStyle onSubmit={login}>
      <LoginFormHeadingStyle>Login</LoginFormHeadingStyle>
      <Input name={"username"} label={"Username"} type={"text"} id={"username"} placeholder={"admin"} value={values.username} onChange={handleChange} />
      <Input name={"password"} label={"Password"} id={"password"} type={"password"} placeholder={"password"} value={values.password} onChange={handleChange} />
      <Button text={"Login"} />
      {error && <p>{error}</p>}
    </LoginFormStyle>
  );
};
