import axios from "axios";
import React, { useEffect, useState } from "react";

function Boards() {
  const [boards, setBoards] = useState([]);

  useEffect(() => {
    const lectureId = 3;
    axios
      .get("/api/board/", { params: { id: lectureId } })
      .then((response) => {
        console.log(response.data);
      })
      .catch();
  });

  return (
    <>
      <div>Boards</div>
    </>
  );
}

export default Boards;
