import React, { useEffect, useState } from "react";
// import "antd/dist/antd.css";
import styled from "styled-components";
import Menu from "../../components/Menu";
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

const Component = () => {
  return (
    <>
      <Menu />

      <StyledBg>
        <img
          src={Pic}
          alt="pic"
          className="rounded-[10px] bg-cover w-[300px] h-[300px] mt-[40px] mr-[50px]"
        />

        <StyledContainer>
          <p className="mt-[40px] font-semibold border-b-4 border-yellow-400 w-[max-content]">
            Hi, I’m Arrianne Mhae Pandaraoan
          </p>
          <p className="mt-[40px] w-[500px] leading-loose text-justify">
            I created this archive type of thing to serve as a reference for
            things related to agriculture, programming, cloud computing,
            mathematics, and science. I also have some posts on the blog section
            containing some personal insights on various topics. Cheers!
          </p>
        </StyledContainer>
      </StyledBg>
    </>
  );
};

export default Component;
