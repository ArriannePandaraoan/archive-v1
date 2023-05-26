import React from "react";
import styled from "styled-components";
import Pic from "../../../assets/images/blgPic.jpg";
import { Button, Space } from "antd";

const StyledBgColor = styled.div`
  background-color: #f4f4f4;
  display: flex;
  flex-direction: row;
  padding: 30px;
  border-radius: 10px;
`;

const StyledContainer2 = styled.div`
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
      <StyledBgColor>
        <img
          src={Pic}
          alt="pic"
          className="rounded-[10px] bg-cover w-[180px] h-[180px] mt-[10px] mr-[50px]"
        />

        <StyledContainer2>
          <p className="mt-[10px] font-semibold mb-[5px]">useEffect in React</p>
          <p className="mt-[10px] w-[500px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam
          </p>
          <Button
            className="buttonCategory"
            style={{
              backgroundColor: "#3FBC96",
              color: "white",
              marginTop: "20px",
              width: "max-content",
            }}
            size="medium"
          >
            <StyledButtonIcon>
              {" "}
              <span className="">Read More</span>
            </StyledButtonIcon>
          </Button>
        </StyledContainer2>
      </StyledBgColor>
    </>
  );
};

export default Component;
