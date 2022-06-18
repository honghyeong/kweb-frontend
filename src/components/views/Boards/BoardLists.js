import axios from "axios";
import React, { useEffect, useState } from "react";
import { getCookie, setCookie } from "../../../utils/Cookie";
import InstructorBoard from "./Sections/InstructorBoard";
import StudentBoard from "./Sections/StudentBoard";
import "./Sections/css/BoardLists.css";

function BoardLists() {
  const [boards, setBoards] = useState([]);
  const [role, setRole] = useState(0);

  const location = window.location.pathname;
  const paramRegex = /lists/;
  const result = location.match(paramRegex).index;
  const lectureId = Number(location.substring(result + 6));
  // console.log(lectureId);

  const onRegister = (event) => {
    window.location.href = "/board/register/" + lectureId;
  };

  const onClick = (event) => {
    const boardId = event.target.id;
    window.location.href = "/board/view/" + boardId;
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
      <div className="lecture-box">
        <div className="lecture-list-box">
          <div className="lecture-list-name">전체 게시물 목록</div>
          {role == 0 ? (
            <div>
              <button className="lecture-register" onClick={onRegister}>
                게시물 작성
              </button>
            </div>
          ) : null}
          <div className="lecture-category">
            <div className="lecture-category-id">id</div>
            <div className="lecture-category-title">title</div>
          </div>
          {boards.map((board) => {
            return role == 1 ? (
              <StudentBoard board={board} key={board.id} onClick={onClick} />
            ) : (
              <InstructorBoard board={board} key={board.id} onClick={onClick} />
            );
          })}
        </div>
      </div>
    </>
  );
}

export default BoardLists;
