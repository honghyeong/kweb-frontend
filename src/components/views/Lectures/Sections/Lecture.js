import React from "react";
import "./css/Lecture.css";

function Lecture({ lecture, onRegister, onClick }) {
  return (
    <>
      <style>
        @import
        url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100&display=swap');
      </style>
      <div className="lecture-list">
        <div className="lecture-id">{lecture.id}</div>
        <div className="lecture-title">{lecture.title}</div>
        <div className="lecture-description">{lecture.description}</div>
        <div className="lecture-instructor-name">{lecture.instructor.name}</div>
        <button
          className="lecture-register"
          value={lecture.id}
          onClick={onRegister}
        >
          수강 신청
        </button>
      </div>
    </>
  );
}

export default Lecture;
