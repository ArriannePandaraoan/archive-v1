import React, { useEffect, useState } from "react";
// import "antd/dist/antd.css";
import styled from "styled-components";
import Menu from "../../components/Menu";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { Button, Form } from "antd";
import axios from "axios";

const StyledBg = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  justify-content: center;
  margin-top: 5%;
  width: 50%;
  margin-left: auto;
  margin-right: auto;
`;

const StyledContainer = styled.div`
  overflow: hidden !important;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 5%;
`;

const StyledButton = styled.div`
  overflow: hidden !important;
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 2%;
`;

const modules = {
  toolbar: [
    //[{ 'font': [] }],
    [{ header: [1, 2, false] }],
    ["bold", "italic", "underline", "strike", "blockquote"],
    [
      { list: "ordered" },
      { list: "bullet" },
      { indent: "-1" },
      { indent: "+1" },
    ],
    ["link", "image"],
    [{ align: [] }, { color: [] }, { background: [] }], // dropdown with defaults from theme
    ["clean"],
  ],
};

const formats = [
  //'font',
  "header",
  "bold",
  "italic",
  "underline",
  "strike",
  "blockquote",
  "list",
  "bullet",
  "indent",
  "link",
  "image",
  "align",
  "color",
  "background",
];

const Component = () => {
  const [content, setContent] = useState("");

  const handleChange = (content, delta, source, editor) => {
    console.log(editor.getHTML());
    // console.log(JSON.stringify(editor.getContents())); // delta 사용시
    setContent(editor.getHTML());
  };

  const onEditorChange = (value) => {
    setContent(value);
    console.log(value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    setContent("");

    const variables = {
      content: content,
    };

    axios.post("api/createPost", variables);
  };

  return (
    <>
      <Menu />

      <StyledBg>
        <ReactQuill
          style={{ height: "200px" }}
          theme="snow"
          modules={modules}
          formats={formats}
          //   value={value}
          onChange={onEditorChange}
        />
        <StyledButton>
          <StyledContainer>
            <Form onSubmit={onSubmit}>
              <Button
                className="buttonCategory"
                style={{
                  backgroundColor: "#F5F5F5",
                  color: "black",
                  border: "1px solid #D6D6D6",
                  width: "max-content",
                }}
                size="large"
              >
                {" "}
                <span className="">Submit</span>
              </Button>
            </Form>
          </StyledContainer>
        </StyledButton>
      </StyledBg>
    </>
  );
};

export default Component;
