import React from "react";

function InstructorBoard({ board }) {
  return (
    <>
      <div>Board</div>
      <div className="board">
        <div>{board.id}</div>
        <div>{board.title}</div>
        <div>{board.content}</div>
        <button>수정</button>
        <button>삭제</button>
      </div>
    </>
  );
}

export default InstructorBoard;
