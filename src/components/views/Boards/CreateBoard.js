import React, { useState } from "react";
import ReactQuill, { Quill } from "react-quill";
import { ImageUpload } from "quill-image-upload";
import "react-quill/dist/quill.snow.css";
import axios from "axios";
Quill.register("modules/imageUpload", ImageUpload); // 커스텀 라이브러리를 등록해 준다.

function CreateBoard() {
  const [value, setValue] = useState("");
  const [title, setTitle] = useState("");
  console.log(value);
  const onChange = (event) => {
    setTitle(event.target.value);
  };

  const onSubmit = (event) => {
    window.location.href = "/board/lists";

    const body = {
      title,
      description: value,
      lectureId: "",
    };

    axios
      .post("/api/board", body)
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <div>CreateBoard</div>
      <input type="text" value={title} onChange={onChange} />
      <ReactQuill theme="snow" value={value} onChange={setValue} />
    </>
  );
}

export default CreateBoard;
