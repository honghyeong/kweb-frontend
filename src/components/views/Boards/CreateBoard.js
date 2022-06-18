import React, { useState } from "react";
import ReactQuill, { Quill } from "react-quill";
import { ImageUpload } from "quill-image-upload";
import "react-quill/dist/quill.snow.css";
import axios from "axios";
Quill.register("modules/imageUpload", ImageUpload); // 커스텀 라이브러리를 등록해 준다.

function CreateBoard() {
  const [value, setValue] = useState("");
  const [title, setTitle] = useState("");

  // extract lectureId from ul
  const location = window.location.pathname;
  const paramRegex = /register/;
  const result = location.match(paramRegex).index;
  const lectureId = Number(location.substring(result + 9));

  const onChange = (event) => {
    setTitle(event.target.value);
  };

  const onSubmit = (event) => {
    const body = {
      title,
      content: value,
      lectureId,
    };

    axios
      .post("/api/board", body)
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });

    window.location.href = "/board/lists/" + lectureId;
  };

  return (
    <>
      <div>CreateBoard</div>
      <div>
        <input
          type="text"
          value={title}
          onChange={onChange}
          placeholder="제목을 입력하세요"
        />
      </div>
      <ReactQuill theme="snow" value={value} onChange={setValue} />
      <button onClick={onSubmit}>작성 완료</button>
    </>
  );
}

export default CreateBoard;
