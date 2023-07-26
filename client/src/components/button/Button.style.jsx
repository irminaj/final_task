import { styled } from "styled-components";

export const ButtonStyle = styled.button`
  width: 30%;
  font-size: 20px;
  font-weight: 600;
  background-color: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.white};
  border: none;
  border-radius: 5px;
  padding: 8px 0;
  margin-top: 20px;
  outline: none;
`;
