import axios from "axios";
import React, { useEffect, useState } from "react";
import StudentLecture from "./Sections/studentLecture";

/**
 * 학생이 신청한 강의 목록을 볼 수 있다.
 * 해당 강의를 누르면 강의에 등록된 게시물 목록을 보여준다.
 */

function StudentLectures() {
  const [lectures, setLecture] = useState([]);

  useEffect(() => {
    axios.get("/api/lecture/student").then((response) => {
      setLecture(response.data);
    });
  }, [lectures]);

  return (
    <>
      <div>LectureList</div>
      {lectures.map((lecture) => {
        return <StudentLecture lecture={lecture} key={lecture.id} />;
      })}
    </>
  );
}

export default StudentLectures;
