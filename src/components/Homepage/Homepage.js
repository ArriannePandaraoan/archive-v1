import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Folder from "../../assets/svg/Folder";
import EconomicsButton from "../../components/CategoryButtons/Economics";
import CodingButton from "../../components/CategoryButtons/Coding";
import AwsButton from "../../components/CategoryButtons/AWS";
import MathButton from "../../components/CategoryButtons/Math";
import ContentEven from "../../components/ContentHome/ContentEven";
import ContentOdd from "../../components/ContentHome/ContentOdd";
// import Pic from "../../../assets/images/blgPic.jpg";
import Menu from "../../components/Menu";
import { Button, Form, Input, Space, Table } from "antd";
import AgricultureButton from "../CategoryButtons/Agriculture";
import CategoryHomepage from "../CategoryHomepage/CategoryHomepage";
import { SearchOutlined } from "@ant-design/icons";
import axios from "axios";
import { Link } from "react-router-dom";

const StyledContainer = styled.div`
  overflow: hidden !important;
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding-top: 4%;
`;

const StyledContainerSearch = styled.div`
  overflow: hidden !important;
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding-top: 2%;
`;

const StyledContainerCategory = styled.div`
  overflow: hidden !important;
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding-top: 2%;
`;

const StyledContainerInnerAlign = styled.div`
  overflow: hidden !important;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  padding-top: 2%;
`;

const StyledContainerCenterAlign = styled.div`
  overflow: hidden !important;
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding-top: 2%;
  // background-color: red;
`;

const StyledAligment = styled.div`
  overflow: hidden !important;
  display: flex;
  width: 50%;
  margin-right: auto;
  margin-left: auto;
  flex-direction: column;
  justify-content: center;
  padding-top: 2%;
`;

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
  // const [content, setContent] = useState();
  // const [name, setName] = useState();

  // function isEven(n) {
  //   return n % 2 === 0;
  // }

  // function isOdd(n) {
  //   return Math.abs(n % 2) === 1;
  // }

  const posts = [
    {
      id: 1,
      title: "asdasd",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, seddo eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
      img: "https://static.wikia.nocookie.net/hellokitty/images/5/52/Sanrio_Characters_Hello_Kitty_Image026.png/revision/latest?cb=20221110163853",
    },
    {
      id: 2,
      title: "two",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, seddo eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
      img: "https://static.wikia.nocookie.net/hellokitty/images/5/52/Sanrio_Characters_Hello_Kitty_Image026.png/revision/latest?cb=20221110163853",
    },
  ];

  return (
    <>
      <Menu />
      <StyledContainer>
        <span className="text-[18px] mr-[15px] text-gray-600">
          Arrianne's Archive
        </span>{" "}
        <Folder />
      </StyledContainer>
      <StyledContainerSearch>
        <Input
          placeholder="Search. . ."
          style={{
            borderRadius: "50px",
            width: "300px",
            cursor: "pointer",
          }}
          size="middle"
          suffix={<SearchOutlined />}
          // value={value}
          // onChange={}
          // onPressEnter={}
        />
      </StyledContainerSearch>
      <StyledAligment>
        <StyledContainerCategory>
          <AgricultureButton />

          <CodingButton />

          <EconomicsButton />

          <AwsButton />

          <MathButton />
        </StyledContainerCategory>

        <StyledContainerInnerAlign>
          <CategoryHomepage />
        </StyledContainerInnerAlign>

        {/* {content === isOdd ? (
          <StyledContainerCenterAlign>
            <ContentEven />
          </StyledContainerCenterAlign>
        ) : (
          <StyledContainerCenterAlign>
            <ContentOdd />
          </StyledContainerCenterAlign>
        )} */}

        {posts.map((post) => {
          <div key={post.id}>{post.title}</div>;
        })}

        {/* <StyledContainerCenterAlign>
          <ContentOdd />
        </StyledContainerCenterAlign> */}
      </StyledAligment>
    </>
  );
};

export default Component;
