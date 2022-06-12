import React from "react";

function Lecture({ lectureId, title, desription, instructorName }) {
  return (
    <>
      <div className="lecture">
        <div>{lectureId}</div>
        <div>{title}</div>
        <div>{desription}</div>
        <div>{instructorName}</div>
        <button>신청</button>
      </div>
    </>
  );
}

export default Lecture;
