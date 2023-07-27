import { styled } from "styled-components";

export const InputContainerStyle = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
`;

export const LabelStyle = styled.label`
  font-size: 18px;
  margin-bottom: 5px;
`;

export const InputStyle = styled.input`
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
