import React from "react";

function StudentLecture({ lecture }) {
  return (
    <>
      <div className="student-lecture">
        <div>{lecture.id}</div>
        <div>{lecture.title}</div>
        <div>{lecture.description}</div>
        <button value={lecture.id}>수강 취소</button>
        <div>test</div>
      </div>
    </>
  );
}

export default StudentLecture;
