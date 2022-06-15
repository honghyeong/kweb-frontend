import axios from "axios";
import React from "react";
import { Cookies, useCookies } from "react-cookie";
import { useDispatch, useSelector } from "react-redux";
import { getCookie, removeCookie, setCookie } from "../../../utils/Cookie";
import { logoutUser } from "../../../_actions/user_action";
function NavigationBar(props) {
  const cookie = new Cookies();
  const dispatch = useDispatch();
  const logined = useSelector((state) => state);

  const jwt = cookie.getAll();
  console.log("Cookie:", jwt);
  const logOutHandler = (event) => {
    dispatch(logoutUser()).then((response) => {
      if (response.payload.logoutSuccess) {
        props.history.push("/");
      } else {
        alert("LogOut Failed");
      }
    });
  };

  return (
    <>
      <div>NavigationBar</div>
      <button onClick={logOutHandler}>로그아웃</button>
    </>
  );
}

export default NavigationBar;
