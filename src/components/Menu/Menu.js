import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/authContext";

const StyledContainer = styled.div`
  overflow: hidden !important;
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding-top: 3%;
`;

const Component = () => {
  const { currentUser, logout } = useContext(AuthContext);

  return (
    <>
      <StyledContainer>
        <Link className="text-gray-600 hover:text-blue-600 ml-[5%]">Home</Link>
        <Link className="text-gray-600 hover:text-blue-600 ml-[5%]">About</Link>
        <Link className="text-gray-600 hover:text-blue-600 ml-[5%]">Blogs</Link>
        <Link className="items-center justify-end flex w-[100%] mr-[5%]">
          Welcome {currentUser?.username} !{" "}
          {currentUser ? (
            <span
              className="ml-[3%] text-gray-600 hover:text-blue-600"
              onClick={logout}
            >
              Logout
            </span>
          ) : (
            <Link
              className="ml-[3%] text-gray-600 hover:text-blue-600"
              to="/login"
            >
              Login
            </Link>
          )}
        </Link>
      </StyledContainer>
    </>
  );
};

export default Component;
