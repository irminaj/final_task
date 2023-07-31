import React from "react";
import { UsersList } from "../../components/users/UsersList";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "../../components/button/Button";
import { MainContainerStyle, MainHeadingWrapperStyle, MainHeadingstyle, HomePageWrapperStyle, ButtonContainerStyle } from "./Home.style";
import { LoginForm } from "../../features/login/LoginForm";

export const Home = () => {
  const localStorageArray = JSON.parse(localStorage.getItem("admin"));
  const logout = (e) => {
    e.preventDefault();
    localStorage.clear();
    window.location.reload();
  };

  return (
    <div>
      {localStorageArray ? (
        <HomePageWrapperStyle>
          <MainHeadingWrapperStyle>
            <MainHeadingstyle>User registration application</MainHeadingstyle>
          </MainHeadingWrapperStyle>
          <MainContainerStyle>
            <ButtonContainerStyle>
              <Link to={"/create"}>
                <Button text={"Add new user"} />
              </Link>
              <Button text={"Logout"} onClick={logout} />
            </ButtonContainerStyle>
            <UsersList />
          </MainContainerStyle>
        </HomePageWrapperStyle>
      ) : (
        <LoginForm />
      )}
    </div>
  );

  // return (
  // <HomePageWrapperStyle>
  //   <MainHeadingWrapperStyle>
  //     <MainHeadingstyle>User registration application</MainHeadingstyle>
  //   </MainHeadingWrapperStyle>
  //   <MainContainerStyle>
  //     <Link to={"/create"}>
  //       <Button text={"Add new user"} />
  //     </Link>
  //     <UsersList />
  //   </MainContainerStyle>
  // </HomePageWrapperStyle>
  // );
};
