import React from "react";
import { UsersList } from "../../components/users/UsersList";
import { Link } from "react-router-dom";
import { Button } from "../../components/button/Button";
import { MainContainerStyle, MainHeadingWrapperStyle, MainHeadingstyle, HomePageWrapperStyle } from "./Home.style";

export const Home = () => {
  return (
    <HomePageWrapperStyle>
      <MainHeadingWrapperStyle>
        <MainHeadingstyle>User registration application</MainHeadingstyle>
      </MainHeadingWrapperStyle>
      <MainContainerStyle>
        <Link to={"/create"}>
          <Button text={"Add new user"} />
        </Link>
        <UsersList />
      </MainContainerStyle>
    </HomePageWrapperStyle>
  );
};
