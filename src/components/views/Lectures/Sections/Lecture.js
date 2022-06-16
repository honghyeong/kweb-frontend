import React from "react";

function Lecture({ lecture, onRegister, onClick }) {
  return (
    <>
      <div className="lecture">
        <div>{lecture.id}</div>
        <div>{lecture.title}</div>
        <div>{lecture.description}</div>
        <div>{lecture.instructor.name}</div>
        <button value={lecture.id} onClick={onRegister}>
          수강 신청
        </button>
      </div>
    </>
  );
}

export default Lecture;
