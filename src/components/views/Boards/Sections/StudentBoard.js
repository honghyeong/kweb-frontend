import React from "react";

function StudentBoard({ board }) {
  return (
    <>
      <div>StudentBoard</div>
      <div className="board">
        <div>{board.id}</div>
        <div>{board.title}</div>
      </div>
    </>
  );
}

export default StudentBoard;
