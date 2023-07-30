import { styled } from "styled-components";
import { Link } from "react-router-dom";

export const EditLinkStyle = styled(Link)`
  text-decoration: none;
  font-size: 20px;
  font-weight: 600;
  background-color: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.white};
  border: none;
  border-radius: 5px;
  padding: 6px 40px;
  margin-top: 20px;
  margin-right: 10px;
  outline: none;
`;
