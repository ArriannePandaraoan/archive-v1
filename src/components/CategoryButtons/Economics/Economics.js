import React from "react";
import styled from "styled-components";

import Economics from "../../../assets/svg/Economics";
import { Button, Space } from "antd";

const StyledButtonIcon = styled.div`
  overflow: hidden !important;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const Component = () => {
  return (
    <>
      <Space>
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
        >
          <StyledButtonIcon>
            {" "}
            <span className="mr-[10px]">
              <Economics />
            </span>{" "}
            Economics
          </StyledButtonIcon>
        </Button>
      </Space>
    </>
  );
};

export default Component;
