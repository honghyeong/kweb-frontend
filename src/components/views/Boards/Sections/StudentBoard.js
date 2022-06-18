import React from "react";

function StudentBoard({ board, onClick }) {
  return (
    <>
      <div>StudentBoard</div>
      <div className="board">
        <div>{board.id}</div>
        <div>
          <p onClick={onClick} value={board.id}>
            {board.title}
          </p>
        </div>
      </div>
    </>
  );
}

export default StudentBoard;
