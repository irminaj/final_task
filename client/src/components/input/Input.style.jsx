import { styled } from "styled-components";

export const FormInputStyle = styled.input`
  font-size: 18px;
  padding: 8px;
  border-radius: 5px;
  border: 2px solid;
  border-color: ${(props) => props.theme.colors.steelGrey};

  &:focus {
    border-color: ${(props) => props.theme.colors.primary};
    outline: none;
  }
`;
