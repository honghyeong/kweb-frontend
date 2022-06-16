import React from "react";

function InstructorLecture({ lecture, onClick }) {
  return (
    <>
      <div className="instructor-lecture">
        <div>{lecture.id}</div>
        <div>
          <p onClick={onClick} id={lecture.id}>
            {lecture.title}
          </p>
        </div>
        <div>{lecture.description}</div>
      </div>
    </>
  );
}

export default InstructorLecture;
