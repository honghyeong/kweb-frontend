import axios from "axios";
import React, { useEffect, useState } from "react";

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
      <div>Board</div>
      <div>{data.id}</div>
      <div>{data.title}</div>
      <div dangerouslySetInnerHTML={{ __html: s }}></div>
    </>
  );
}

export default Board;
