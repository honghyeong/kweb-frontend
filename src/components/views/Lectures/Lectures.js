import axios from "axios";
import React, { useEffect, useState } from "react";
import Lecture from "./Sections/Lecture";
import "./Sections/css/Lectures.css";
import { undefinedRedirecting } from "../../../utils/AuthRedirecting";
import { getCookie } from "../../../utils/Cookie";

function Lectures(props) {
  const [lectures, setLecture] = useState([]);
  const role = getCookie("role");

  undefinedRedirecting();

  useEffect(() => {
    axios.get("/api/lecture").then((response) => {
      setLecture(response.data);
    });
  }, [lectures]);

  const onRegister = (event) => {
    const lectureId = event.target.value;
    console.log(lectureId);
    axios
      .post("/api/lecture/register", { lectureId })
      .then((response) => {
        console.log("Registered Lecture :", response.data);
      })
      .catch((err) => {
        if (err & err.response.status) alert("학생이 아닙니다");
      });
  };

  return (
    <>
      <div className="lecture-box">
        <div className="lecture-list-box">
          <div className="lecture-list-name">전체 강의 목록</div>
          <div className="lecture-category">
            <div className="lecture-category-id">id</div>
            <div className="lecture-category-title">title</div>
            <div className="lecture-category-description">description</div>
            <div className="lecture-category-instructor">instructor</div>
          </div>
          {lectures.map((lecture) => {
            return (
              <Lecture
                lecture={lecture}
                key={lecture.id}
                onRegister={onRegister}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}
export default Lectures;
