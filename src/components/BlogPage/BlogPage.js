import React from "react";
// import "antd/dist/antd.css";
import styled from "styled-components";
import Menu from "../Menu";
import Pic from "../../assets/images/vintageBus.jpg";

const StyledBg = styled.div`
  display: flex;
  flex-direction: row;
  padding: 30px;
  border-radius: 10px;
  justify-content: center;
`;

const StyledContainer = styled.div`
  overflow: hidden !important;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

const StyledButtonIcon = styled.div`
  overflow: hidden !important;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const StyledContainerImg = styled.div`
  overflow: hidden !important;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Component = () => {
  return (
    <>
      <Menu />

      <StyledBg>
        <StyledContainerImg>
          <img
            src={Pic}
            alt="pic"
            className="rounded-[10px] bg-cover w-[300px] h-[300px] mt-[40px] mr-[50px]"
          />
        </StyledContainerImg>
        <StyledContainer>
          <p className="mt-[40px] font-semibold border-b-4 border-yellow-400 w-[max-content] ">
            Title Blog
          </p>

          <p className="mt-[20px] w-[500px] leading-loose text-justify text-[10px]">
            <b>Author:</b> Arrianne <br /> <b>Updated:</b> June 4, 2023
          </p>
          <p className="mt-[40px] w-[500px] leading-loose text-justify text-[12px]">
            Some text
          </p>
        </StyledContainer>
      </StyledBg>
    </>
  );
};

export default Component;
