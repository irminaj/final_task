import { styled } from "styled-components";

export const ButtonStyle = styled.button`
  width: 150px;
  font-size: 20px;
  font-weight: 600;
  background-color: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.white};
  border: none;
  padding: 11px 5px;
  border-radius: 5px;
  margin-top: 20px;
  margin-right: 10px;
  outline: none;
`;
