import React from "react";

function InstructorLecture({ lecture }, onDelete) {
  return (
    <>
      <div className="instructor-lecture">
        <div>{lecture.id}</div>
        <div>{lecture.title}</div>
        <div>{lecture.description}</div>
        <button value={lecture.id} onClick={() => onDelete()}>
          수강 신청
        </button>
      </div>
    </>
  );
}

export default InstructorLecture;
