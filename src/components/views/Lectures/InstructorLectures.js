import axios from "axios";
import React, { useEffect, useState } from "react";
import Lecture from "./Sections/Lecture";

function InstructorLectures() {
  const [lectures, setLecture] = useState([]);

  useEffect(() => {
    axios.get("/api/lecture/instructor").then((response) => {
      setLecture(response.data);
    });
  }, [lectures]);

  return (
    <>
      <div>LectureList</div>
      {lectures.map((lecture) => {
        return <Lecture lecture={lecture} key={lecture.id} />;
      })}
    </>
  );
}

export default InstructorLectures;
