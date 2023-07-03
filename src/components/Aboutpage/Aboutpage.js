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
          <p className="mt-[40px] w-[500px] leading-loose text-justify text-[12px]">
            I am a fanatic of the application of math in{" "}
            <b>crime scene investigations</b> as well as in{" "}
            <b>optimization theory</b>. I also find enjoyment in learning more
            about <b>agriculture</b> and <b>economics</b>. <br />
            <br />
            As I delve more in the aforementioned topics, I realize more and
            more the impact of technology in our daily lives -- may it be for
            sheer pleasures, process improvements, connectivity with others
            across the globe, or pursuits of knowledge. Indeed, the digital
            space offers so many possibilities and it is up to us on how we can
            make the best out of it. <br />
            <br /> That is why I got into <b>coding</b>, as it offers so many
            possibilities to tailor-fit the needs of supposed users. <br />
            <br />
            Cheers!
          </p>
        </StyledContainer>
      </StyledBg>
    </>
  );
};

export default Component;
