import React from "react";
import "./css/StudentLecture.css";

function StudentLecture({ lecture, onClick }) {
  return (
    <>
      <style>
        @import
        url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100&display=swap');
      </style>
      <div className="student-lecture-list">
        <div className="student-lecture-id">{lecture.id}</div>
        <div className="student-lecture-title">
          <a onClick={onClick} id={lecture.id}>
            {lecture.title}
          </a>
        </div>
        <div className="student-lecture-description">{lecture.description}</div>
        {/* <button value={lecture.id}>수강 취소</button> */}
      </div>
    </>
  );
}

export default StudentLecture;
