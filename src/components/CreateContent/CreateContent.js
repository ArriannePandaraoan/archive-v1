import React, { useEffect, useState } from "react";
// import "antd/dist/antd.css";
import styled from "styled-components";
import Menu from "../../components/Menu";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { Button, Form, Input } from "antd";
import axios from "axios";

const StyledBg = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  margin-top: 3%;
  width: 50%;
  margin-left: auto;
  margin-right: auto;
`;

const StyledBgRow = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 3%;
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

  const [title, setTitle] = useState("");

  const [file, setFile] = useState(null);

  const [category, setCategory] = useState("");

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
        <Input
          className="mb-[30px]"
          type="text"
          placeholder="Title"
          onChange={(e) => setTitle(e.target.value)}
        ></Input>
        <ReactQuill
          style={{ height: "200px" }}
          theme="snow"
          modules={modules}
          formats={formats}
          //   value={value}
          onChange={onEditorChange}
        />

        {/* <StyledButton>
          <StyledContainer>
            <Form onSubmit={onSubmit}>
              <Button
                className="buttonCategory"
                style={{
                  backgroundColor: "#3fbc96",
                  color: "black",
                  border: "1px solid #D6D6D6",
                  width: "max-content",
                }}
                size="large"
              >
                {" "}
                <span className="text-[white] font-semibold">Submit</span>
              </Button>
            </Form>
          </StyledContainer>
        </StyledButton> */}
      </StyledBg>

      <StyledBgRow>
        <StyledBg>
          <div className="">
            <h1>
              <b>Publish 📝</b>
            </h1>{" "}
            <div>
              <b>Status:</b> Draft
            </div>
            <div className="mb-[10px]">
              <b>Visibility:</b> Public
            </div>
            <input
              className="hidden"
              type="file"
              name=""
              id="file"
              onChange={(e) => setFile(e.target.files[0])}
            />
            <label
              className="cursor-pointer underline underline-offset-4"
              htmlFor="file"
            >
              Upload Image
            </label>
            <div className="mt-[10px]">
              <span className="mt-[10px] mr-[10px]">
                <button className="max-w-max cursor-pointer bg-[#3fbc96] text-[white] p-[7px] rounded-[6px]">
                  Save as Draft
                </button>
              </span>
              <span className="mt-[10px]">
                <button className="max-w-max cursor-pointer bg-[#3fbc96] text-[white] p-[7px] rounded-[6px]">
                  Update
                </button>
              </span>
            </div>
          </div>
        </StyledBg>

        <StyledBg>
          <h1>
            <b>Category 👉</b>
          </h1>{" "}
          <div className="flex items-center gap-x-3">
            <input
              type="radio"
              name="category"
              value="Agriculture"
              id="Agriculture"
            />
            <label htmlFor="Agriculture"> Agriculture</label>
          </div>
          <div className="flex items-center gap-x-3">
            <input type="radio" name="category" value="Coding" id="Coding" />
            <label htmlFor="Coding"> Coding</label>
          </div>
          <div className="flex items-center gap-x-3">
            <input
              type="radio"
              name="category"
              value="Economics"
              id="Economics"
            />
            <label htmlFor="Economics"> Economics</label>
          </div>
          <div className="flex items-center gap-x-3">
            <input type="radio" name="category" value="AWS" id="AWS" />
            <label htmlFor="AWS"> AWS</label>
          </div>
          <div className="flex items-center gap-x-3">
            <input
              type="radio"
              name="category"
              value="Crime Scene Investigation"
              id="Crime Scene Investigation"
            />
            <label htmlFor="Crime Scene Investigation">
              {" "}
              Crime Scene Investigation
            </label>
          </div>
          <div className="flex items-center gap-x-3">
            <input
              type="radio"
              name="category"
              value="Optimization Theory"
              id="Optimization Theory"
            />
            <label htmlFor="Optimization Theory"> Optimization Theory</label>
          </div>
        </StyledBg>
      </StyledBgRow>
    </>
  );
};

export default Component;
