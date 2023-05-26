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

const Component = () => {
  return (
    <>
      <p className="text-[25px] pt-[30px] border-b-4 border-yellow-400 text-gray-700">
        Coding
      </p>
    </>
  );
};

export default Component;
