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

  const onCreate = () => {
    window.location.href = "instructor/register";
  };

  const onClick = (event) => {
    const lectureId = event.target.id;
    window.location.href = "/board/lists/" + lectureId;
  };

  return (
    <>
      <div>LectureList</div>
      <button onClick={onCreate}>강의 개설</button>
      {lectures.map((lecture) => {
        return (
          <InstructorLecture
            lecture={lecture}
            key={lecture.id}
            onClick={onClick}
          />
        );
      })}
    </>
  );
}

export default InstructorLectures;
