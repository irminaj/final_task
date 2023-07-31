import { styled } from "styled-components";

export const LoginFormStyle = styled.form`
  width: 40%;
  margin: 0 auto;
  border: 2px solid;
  border-color: ${(props) => props.theme.colors.primary};
  border-radius: 10px;
  padding: 30px 30px;
  margin-top: 50px;
`;

export const LoginFormHeadingStyle = styled.h3`
  color: ${(props) => props.theme.colors.primary};
  text-align: center;
  font-size: 24px;
`;
