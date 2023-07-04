import React from "react";
import styled from "styled-components";
import Corn from "../../../assets/svg/Corn";
import { Button, Space } from "antd";

const StyledButtonIcon = styled.div`
  overflow: hidden !important;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const Component = ({ setCategory }) => {
  const handleClick = (e) => {
    setCategory(e.target.innerText);
  };

  return (
    <>
      <Button
        className="buttonCategory"
        style={{
          backgroundColor: "#F5F5F5",
          color: "black",
          border: "1px solid #D6D6D6",
          marginRight: "20px",
          marginTop: "10px",
        }}
        size="large"
        onClick={handleClick}
      >
        <StyledButtonIcon>
          {" "}
          <span className="mr-[10px]">
            <Corn />
          </span>{" "}
          Agriculture
        </StyledButtonIcon>
      </Button>
    </>
  );
};

export default Component;
