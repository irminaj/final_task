import { styled } from "styled-components";

export const RegistrationPageStyle = styled.div`
  width: 80%;
  margin: 60px auto;
  border: 2px solid;
  border-color: ${(props) => props.theme.colors.primary};
  border-radius: 10px;
  padding: 60px 30px;
`;

export const RegistrationPageHeadingStyle = styled.h3`
  color: ${(props) => props.theme.colors.primary};
  text-align: center;
  font-size: 48px;
`;
