import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import Menu from "../Menu";
import Pic from "../../assets/images/vintageBus.jpg";
import axios from "axios";
import { Link } from "react-router-dom";
import { useLocation, useNavigate } from "react-router-dom";
import moment from "moment/moment";
import { AuthContext } from "../../context/authContext";
import Edit from "../../assets/svg/Edit/Edit.js";
import Trash from "../../assets/svg/Trash/Trash.js";

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

const StyledContainerRow = styled.div`
  overflow: hidden !important;
  display: flex;
  flex-direction: row;
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
  const [post, setPost] = useState({});

  const location = useLocation();

  const postId = location.pathname.split("/")[2];

  const navigate = useNavigate();

  console.log(location);

  const { currentUser } = useContext(AuthContext);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          `http://localhost:8800/api/posts/${postId}`
        );
        setPost(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [postId]);

  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:8800/api/posts/${postId}`);
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

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
          <p className="mt-[40px] font-semibold border-b-4 border-yellow-400 w-[max-content]">
            <StyledContainerRow>
              {" "}
              {post.title}
              {currentUser?.data.username === post?.username && (
                <>
                  <span className="ml-[20px] mt-[-5px]">
                    <Link to={`http://localhost:3000/create-content`}>
                      <Edit />
                    </Link>
                  </span>
                  <span
                    className="ml-[5px] mt-[-5px] cursor-pointer"
                    onClick={handleDelete}
                  >
                    <Trash />
                  </span>
                </>
              )}
            </StyledContainerRow>
          </p>

          <p className="mt-[20px] w-[500px] leading-loose text-justify text-[10px] items-center">
            <b>Author:</b> Admin <br />
            {/* <b>Updated:</b> June 4, 2023 */}
            <b>Updated: </b>
            {moment(post.date).fromNow()}
          </p>

          <p className="mt-[40px] w-[500px] leading-loose text-justify text-[12px]">
            {post.description}
          </p>
        </StyledContainer>
      </StyledBg>
    </>
  );
};

export default Component;
