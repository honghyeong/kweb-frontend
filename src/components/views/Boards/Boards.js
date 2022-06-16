import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

function Boards() {
  const [boards, setBoards] = useState([]);
  const location = useLocation();
  useEffect(() => {
    console.log(location);
    axios
      .get("/api/board/", { params: {} })
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
