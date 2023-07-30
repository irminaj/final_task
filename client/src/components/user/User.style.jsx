import { styled } from "styled-components";
import { Link } from "react-router-dom";

export const TableRowStyle = styled.tr`
  background-color: ${(props) => props.theme.colors.steelGrey};
  width: 100%;
`;

export const TableDataStyle = styled.td`
  color: ${(props) => props.theme.colors.secondary};
  text-align: left;
  padding-left: 10px;
`;

export const TableButtonStyle = styled.td`
  background-color: ${(props) => props.theme.colors.steelGrey};
  display: flex;
  align-items: center;
  padding-bottom: 20px;
  padding-left: 10px;
`;
