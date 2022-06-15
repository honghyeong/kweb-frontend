import React from "react";

function InstructorLecture({ lecture }) {
  return (
    <>
      <div className="instructor-lecture">
        <div>{lecture.id}</div>
        <div>{lecture.title}</div>
        <div>{lecture.description}</div>
        <button value={lecture.id}>신청</button>
        <div>test</div>
      </div>
    </>
  );
}

export default InstructorLecture;