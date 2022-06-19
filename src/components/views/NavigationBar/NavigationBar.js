import axios from "axios";
import React, { useEffect, useState } from "react";
import { Cookies, useCookies } from "react-cookie";
import { useDispatch, useSelector } from "react-redux";
import { getCookie, removeCookie, setCookie } from "../../../utils/Cookie";
import { logoutUser } from "../../../_actions/user_action";
import "./NavigationBar.css";

function NavigationBar(props) {
  const dispatch = useDispatch();
  const logOutHandler = (event) => {
    dispatch(logoutUser()).then((response) => {
      if (response.payload.logoutSuccess) {
        window.location.href = "/";
      } else {
        alert("LogOut Failed");
      }
    });
  };

  const onClick = (event) => {
    const eventId = event.target.id;
    const role = getCookie("role");
    if (eventId == "lecture-list") {
      window.location.href = "/lecture";
    }
    if (eventId == "my-lecture") {
      if (role == 0) window.location.href = "/lecture/instructor";
      if (role == 1) window.location.href = "/lecture/student";
    }
  };

  const role = getCookie("role");
  console.log(role);

  return (
    <>
      <div className="nav-bar">
        <button onClick={onClick} id="lecture-list">
          강의 목록
        </button>
        <button onClick={onClick} id="my-lecture">
          나의 강의
        </button>

        <button onClick={logOutHandler} id="logout">
          로그아웃
        </button>
      </div>
    </>
  );
}

export default NavigationBar;
