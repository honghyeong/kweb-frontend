import React from "react";

function InstructorBoard({ board, onClick }) {
  return (
    <>
      <div>InstructorBoard</div>
      <div className="board">
        <div>{board.id}</div>
        <div>
          <p onClick={onClick} id={board.id}>
            {board.title}
          </p>
        </div>
      </div>
    </>
  );
}

export default InstructorBoard;
