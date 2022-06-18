import React from "react";
import "./css/EachBoard.css";

function StudentBoard({ board, onClick }) {
  return (
    <>
      <style>
        @import
        url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100&display=swap');
      </style>
      <div className="board-list">
        <div className="board-id">{board.id}</div>
        <div className="board-title">
          <a onClick={onClick} id={board.id}>
            {board.title}
          </a>
        </div>
      </div>
    </>
  );
}

export default StudentBoard;
