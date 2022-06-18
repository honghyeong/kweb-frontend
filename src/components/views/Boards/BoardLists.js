import axios from "axios";
import React, { useEffect, useState } from "react";
import { getCookie, setCookie } from "../../../utils/Cookie";
import InstructorBoard from "./Sections/InstructorBoard";
import StudentBoard from "./Sections/StudentBoard";

function BoardLists() {
  const [boards, setBoards] = useState([]);
  const [role, setRole] = useState(0);

  const location = window.location.pathname;
  const paramRegex = /lists/;
  const result = location.match(paramRegex).index;
  const lectureId = Number(location.substring(result + 6));
  const params = { id: lectureId };

  const onRegister = (event) => {
    window.location.href = "/board/register/" + lectureId;
  };

  useEffect(() => {
    axios
      .get("/api/board/" + lectureId)
      .then((response) => {
        setBoards(response.data);
        setRole(getCookie("role"));
        // console.log(boards);
      })
      .catch();
  }, [boards, role]);

  return (
    <>
      <div>Boards</div>
      {role == 0 ? (
        <div>
          <button onClick={onRegister}>게시물 작성</button>
        </div>
      ) : null}
      {boards.map((board) => {
        return role == 1 ? (
          <StudentBoard board={board} key={board.id} />
        ) : (
          <InstructorBoard board={board} key={board.id} />
        );
      })}
    </>
  );
}

export default BoardLists;
