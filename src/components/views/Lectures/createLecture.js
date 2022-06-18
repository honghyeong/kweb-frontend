import axios from "axios";
import React, { useEffect, useState } from "react";
import { getCookie } from "../../../utils/Cookie";
import "./Sections/css/CreateLecture.css";

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

    window.location.href = "/lecture/instructor";
  };

  const onReset = (event) => {
    setInputs({ title: "", description: "" });
  };

  /**
   * TODO
   */
  useEffect(() => {
    const role = getCookie("role");
    console.log(role);
    if (role != 0) {
      window.location.href = "/";
    }
  });

  return (
    <>
      <div className="create-box">
        <div className="create-title">강의 등록</div>
        <div className="create-lecture-title">강의명</div>
        <input
          type="text"
          name="title"
          value={title}
          onChange={onChange}
          placeholder="title"
        />
        <div className="create-lecture-description">강의 설명</div>
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
