import axios from "axios";
import React, { useEffect, useState } from "react";
import "./Sections/css/Board.css";
function Board() {
  const [data, setData] = useState({});

  const location = window.location.pathname;
  const paramRegex = /view/;
  const result = location.match(paramRegex).index;
  const boardId = Number(location.substring(result + 5));

  const s = data.content;

  useEffect(() => {
    axios
      .get("/api/board/view/" + boardId)
      .then((response) => {
        setData(response.data);
        // console.log(data);
      })
      .catch();
  }, [data]);

  return (
    <>
      <style>
        @import
        url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100&display=swap');
      </style>
      <div className="board-box">
        <div className="board-data-box">
          <div className="board-header-top">게시물 조회</div>
          <div className="board-header">
            <div className="board-header-id">{data.id}</div>
            <div className="board-header-title">{data.title}</div>
          </div>
          <div className="board-content">
            <div dangerouslySetInnerHTML={{ __html: s }}></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Board;
