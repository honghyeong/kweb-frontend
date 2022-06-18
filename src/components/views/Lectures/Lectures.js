import axios from "axios";
import React, { useEffect, useState } from "react";
import Lecture from "./Sections/Lecture";

function Lectures() {
  const [lectures, setLecture] = useState([]);

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
      <div>LectureList</div>
      {lectures.map((lecture) => {
        return (
          <Lecture lecture={lecture} key={lecture.id} onRegister={onRegister} />
        );
      })}
    </>
  );
}
export default Lectures;
