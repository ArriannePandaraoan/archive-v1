import React, { useEffect, useState } from "react";
// import "antd/dist/antd.css";
import axios from "axios";
import styled from "styled-components";
import Menu from "../Menu";
import Pic from "../../assets/images/vintageBus.jpg";
import { useNavigate } from "react-router-dom";

const StyledBg = styled.div`
  display: flex;
  flex-direction: row;
  padding: 30px;
  border-radius: 10px;
  justify-content: center;
`;

const StyledContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const StyledButton = styled.div`
  overflow: hidden !important;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Component = () => {
  const [inputs, setInputs] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [err, setError] = useState(null);

  const navigate = useNavigate();

  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  console.log(inputs);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8800/api/auth/register", inputs);
      // console.log(res);
      navigate("/login");
    } catch (err) {
      console.log(err);
      setError(err.response.data);
    }
  };

  return (
    <>
      <Menu />
      <StyledBg>
        <h1>Register</h1>
      </StyledBg>

      <StyledContainer>
        <form>
          <StyledButton>
            <input
              className="mb-[3%]"
              type="text"
              placeholder="username"
              name="username"
              onChange={handleChange}
            />
            <input
              className="mb-[3%]"
              type="email"
              placeholder="email"
              name="email"
              onChange={handleChange}
            />
            <input
              className="mb-[5%]"
              type="password"
              placeholder="password"
              name="password"
              onChange={handleChange}
            />
            <button className="p-[3px] bg-indigo-500" onClick={handleSubmit}>
              Submit
            </button>
            {err && <p className="mt-[5%] text-red-300">{err}</p>}
          </StyledButton>
        </form>
      </StyledContainer>
    </>
  );
};

export default Component;
