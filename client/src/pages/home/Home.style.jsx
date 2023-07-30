import { styled } from "styled-components";

export const HomePageWrapperStyle = styled.div`
  padding: 0;
  margin: 0;
`;

export const MainContainerStyle = styled.div`
  width: 80%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

export const MainHeadingstyle = styled.h1`
  text-align: center;
  font-size: 64px;
  font-weight: 600;
  color: ${(props) => props.theme.colors.steelGrey};
  opacity: 90;
`;

export const MainHeadingWrapperStyle = styled.div`
  padding: 10px 0;
  background-color: ${(props) => props.theme.colors.primary};
  margin-bottom: 20px;
`;
