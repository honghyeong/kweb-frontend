import React from "react";

function Lecture({ lecture }, onRegister) {
  return (
    <>
      <div className="lecture">
        <div>{lecture.id}</div>
        <div>{lecture.title}</div>
        <div>{lecture.description}</div>
        <button value={lecture.id} onClick={onRegister}>
          수강 신청
        </button>
        <div>test</div>
      </div>
    </>
  );
}

export default Lecture;
