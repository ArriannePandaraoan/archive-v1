import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import Menu from "../../components/Menu";
import Pic from "../../assets/images/vintageBus.jpg";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { AuthContext } from "../../context/authContext";

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

const StyledButton = styled.div`
  overflow: hidden !important;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Component = () => {
  const [inputs, setInputs] = useState({
    username: "",
    password: "",
  });

  const [err, setError] = useState(null);

  const navigate = useNavigate();

  const { login } = useContext(AuthContext);

  // console.log(currentUser);

  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  console.log(inputs);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // await axios.post("http://localhost:8800/api/auth/login", inputs);
      // console.log(res);
      await login(inputs);
      navigate("/");
    } catch (err) {
      console.log(err);
      setError(err.response.data);
    }
  };

  return (
    <>
      <Menu />
      <StyledBg>
        <h1>Login</h1>
      </StyledBg>
      <StyledBg>
        <StyledContainer>
          <form>
            <StyledButton>
              <input
                className="mb-[4%]"
                type="text"
                placeholder="username"
                name="username"
                onChange={handleChange}
              />
              <input
                className="mb-[6%]"
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
      </StyledBg>
    </>
  );
};

export default Component;
