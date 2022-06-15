import axios from "axios";
import React, { useEffect, useState } from "react";
import InstructorLecture from "./Sections/InstructorLecture";

/**
 * 교수자가 개설한 강의 목록을 볼 수 있다.
 * 해당 강의를 누르면 강의에 등록된 게시물 목록을 보여준다.
 */

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
        return <InstructorLecture lecture={lecture} key={lecture.id} />;
      })}
    </>
  );
}

export default InstructorLectures;
