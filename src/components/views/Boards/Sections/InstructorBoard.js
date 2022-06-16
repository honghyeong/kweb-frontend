import React from "react";

function InstructorBoard({ board, onClick }) {
  return (
    <>
      <div>InstructorBoard</div>
      <div className="board">
        <div>{board.id}</div>
        <div>{board.title}</div>
        <button onClick={onClick}>수정</button>
        <button>삭제</button>
      </div>
    </>
  );
}

export default InstructorBoard;
