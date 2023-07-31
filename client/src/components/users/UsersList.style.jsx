import { styled } from "styled-components";

export const TableStyle = styled.table`
  width: 100%;
`;

export const TableRowStyle = styled.tr`
  width: 100%;
`;

export const TableHeaderStyle = styled.th`
  background-color: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.white};
  text-align: left;
  padding: 20px 10px;
`;

export const UsersTableTextStyle = styled.h3`
  color: ${(props) => props.theme.colors.primary};
  text-align: center;
  font-size: 48px;
`;
