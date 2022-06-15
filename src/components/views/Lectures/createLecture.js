import axios from "axios";
import React, { useState } from "react";

function CreateLecture() {
  const [inputs, setInputs] = useState({
    title: "",
    description: "",
  });

  const { title, description } = inputs;

  const onChange = (event) => {
    const { name, value } = event.target;

    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const onCreate = async (event) => {
    let body = { title, description };

    axios
      .post("/api/lecture/instructor", body)
      .then((response) => {
        console.log(response.data);
      })
      .catch((err) => {
        if (err && err.response.status == 401) {
          alert("교수가 아닙니다");
        }
      });
  };

  const onReset = (event) => {
    setInputs({ title: "", description: "" });
  };

  return (
    <>
      <div className="create-box">
        <div>createLecture</div>
        <div>title</div>
        <input
          type="text"
          name="title"
          value={title}
          onChange={onChange}
          placeholder="title"
        />
        <div>description</div>
        <input
          type="text"
          name="description"
          value={description}
          onChange={onChange}
          placeholder="description"
        />
        <div>
          <button onClick={onCreate}>등록</button>
          <button onClick={onReset}>취소</button>
        </div>
      </div>
    </>
  );
}

export default CreateLecture;
