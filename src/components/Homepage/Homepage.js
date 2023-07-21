import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Folder from "../../assets/svg/Folder";
import EconomicsButton from "../../components/CategoryButtons/Economics";
import CodingButton from "../../components/CategoryButtons/Coding";
import AwsButton from "../../components/CategoryButtons/AWS";
import MathButton from "../../components/CategoryButtons/Math";
import OptimizationButton from "../../components/CategoryButtons/Optimization";
import ContentEven from "../../components/ContentHome/ContentEven";
// import Pic from "../../../assets/images/blgPic.jpg";
import Menu from "../../components/Menu";
import { Button, Form, Input, Space, Table } from "antd";
import AgricultureButton from "../CategoryButtons/Agriculture";
import CategoryHomepage from "../CategoryHomepage/CategoryHomepage";
import { SearchOutlined } from "@ant-design/icons";
import axios from "axios";
import { Link } from "react-router-dom";
import {
  useLocation,
  useParams,
  redirect,
  useNavigate,
} from "react-router-dom";

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
  flex-wrap: wrap;
  justify-content: center;
`;

const StyledContainerInnerAlign = styled.div`
  overflow: hidden !important;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  padding-top: 2%;
  padding-bottom: 2%;
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
  const [posts, setPosts] = useState([]);

  const [category, setCategory] = useState("All Topics");

  const [reload, setReload] = useState(false);

  const navigate = useNavigate();

  const location = useLocation();
  console.log(location);
  const categoryQuery = useLocation().search;

  const host = process.env.REACT_APP_API;
  const local = process.env.REACT_APP_LOCAL;

  const refresh = () => {
    window.onload = function () {
      navigate("/archive-v1");
      setCategory("All Topics");
    };
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          // `http://localhost:8800/api/posts${categoryQuery}`
          `http://ec2-13-214-146-19.ap-southeast-1.compute.amazonaws.com:8800/api/posts${categoryQuery}`
        );
        setPosts(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
    refresh();
  }, [categoryQuery]);

  // useEffect(() => {
  //   refresh();
  // }, [reload]);

  // const [posts, setPosts] = useState([
  //   {
  //     id: 1,
  //     title: "Test 1",
  //     description:
  //       "Lorem ipsum dolor sit amet, consectetur adipiscing elit, seddo eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
  //     img: "https://static.wikia.nocookie.net/hellokitty/images/5/52/Sanrio_Characters_Hello_Kitty_Image026.png/revision/latest?cb=20221110163853",
  //   },
  //   {
  //     id: 2,
  //     title: "Test 2",
  //     description:
  //       "Lorem ipsum dolor sit amet, consectetur adipiscing elit, seddo eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
  //     img: "https://static.wikia.nocookie.net/hellokitty/images/5/52/Sanrio_Characters_Hello_Kitty_Image026.png/revision/latest?cb=20221110163853",
  //   },
  // ]);

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
          {/* <Link to={`http://localhost:3000/?category=Agriculture`}> */}
          <Link
            to={`https://arriannepandaraoan.github.io/archive-v1/?category=Agriculture`}
          >
            <AgricultureButton setCategory={setCategory} />
          </Link>

          <Link
            to={`https://arriannepandaraoan.github.io/archive-v1/?category=Coding`}
          >
            <CodingButton setCategory={setCategory} />
          </Link>

          <Link
            to={`https://arriannepandaraoan.github.io/archive-v1/?category=Economics`}
          >
            <EconomicsButton setCategory={setCategory} />
          </Link>

          <Link
            to={`https://arriannepandaraoan.github.io/archive-v1/?category=Aws`}
          >
            <AwsButton setCategory={setCategory} />
          </Link>

          <Link
            to={`https://arriannepandaraoan.github.io/archive-v1/?category=CrimeSceneInvest`}
          >
            <MathButton setCategory={setCategory} />
          </Link>

          <Link
            to={`https://arriannepandaraoan.github.io/archive-v1/?category=Optimization`}
          >
            <OptimizationButton setCategory={setCategory} />
          </Link>
        </StyledContainerCategory>

        <StyledContainerInnerAlign>
          <CategoryHomepage category={category} />
        </StyledContainerInnerAlign>

        <ContentEven posts={posts} />
      </StyledAligment>
    </>
  );
};

export default Component;
