import React from "react";
import "./css/InstructorLecture.css";

function InstructorLecture({ lecture, onClick }) {
  return (
    <>
      <style>
        @import
        url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100&display=swap');
      </style>
      <div className="instructor-lecture-list">
        <div className="instructor-lecture-id">{lecture.id}</div>
        <div className="instructor-lecture-title">
          <a onClick={onClick} id={lecture.id}>
            {lecture.title}
          </a>
        </div>
        <div className="instructor-lecture-description">
          {lecture.description}
        </div>
      </div>
    </>
  );
}

export default InstructorLecture;
