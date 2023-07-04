import React from "react";
import styled from "styled-components";
import Pic from "../../../assets/images/blgPic.jpg";
import { Button, Space } from "antd";
import { Link } from "react-router-dom";

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

const StyledContainer3 = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  padding-top: 2%;
`;

const StyledButtonIcon = styled.div`
  overflow: hidden !important;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const Component = ({ posts }) => {
  return (
    <>
      {posts.map((post) => (
        <div key={post.id}>
          <StyledContainer3>
            <StyledBgColor>
              <img
                src={Pic}
                alt="pic"
                className="rounded-[10px] bg-cover w-[180px] h-[180px] mt-[10px] mr-[50px]"
              />

              <StyledContainer2>
                <p className="mt-[10px] font-semibold mb-[5px]">{post.title}</p>
                <p className="mt-[10px] w-[500px]">{post.description}</p>
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
                    <Link className="link" to={`/post/${post.title}`}>
                      <span className="">Read More</span>
                    </Link>
                  </StyledButtonIcon>
                </Button>
              </StyledContainer2>
            </StyledBgColor>
          </StyledContainer3>
        </div>
      ))}
    </>
  );
};

export default Component;
