import React from "react";

function Lecture({ lecture }) {
  return (
    <>
      <div className="lecture">
        <div>{lecture.id}</div>
        <div>{lecture.title}</div>
        <div>{lecture.description}</div>
        <button>신청</button>
      </div>
    </>
  );
}

export default Lecture;
