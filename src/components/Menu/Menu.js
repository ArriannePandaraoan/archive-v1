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
  const [toggle, setToggle] = useState("block");

  const isLoggedIn = () => {
    setToggle("none");
  };

  return (
    <>
      <StyledContainer>
        <Link className="text-gray-600 hover:text-blue-600 ml-[5%]">Home</Link>
        <Link
          className="text-gray-600 hover:text-blue-600 ml-[5%]"
          to={`/about`}
        >
          About
        </Link>
        <Link className="text-gray-600 hover:text-blue-600 ml-[5%]">Blogs</Link>
        <Link className="items-center justify-end flex w-[100%] mr-[5%]">
          {currentUser ? (
            <>
              Welcome
              <span className="font-semibold text-[#3fbc96] ml-[10px]">
                {currentUser?.username}!
              </span>
              <span
                className="ml-[10px] text-gray-600 hover:text-blue-600"
                onClick={logout}
              >
                Logout
              </span>
            </>
          ) : (
            <>
              Welcome
              <span className="font-semibold text-[#3fbc96] ml-[10px] mr-[10px]">
                Guest!
              </span>
              {/* <Link
                className="ml-[10px] text-gray-600 hover:text-blue-600"
                to="/register"
              > */}
              Register
              {/* </Link> */}
            </>
          )}
        </Link>
      </StyledContainer>
    </>
  );
};

export default Component;
