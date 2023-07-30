import React from "react";
import { RegistrationForm } from "../../features/registrationForm/RegistrationForm";
import { RegistrationPageStyle, RegistrationPageHeadingStyle } from "./RegistrationPage.style";

export const RegistrationPage = () => {
  return (
    <RegistrationPageStyle>
      <RegistrationPageHeadingStyle>Registration Form</RegistrationPageHeadingStyle>
      <RegistrationForm />
    </RegistrationPageStyle>
  );
};
