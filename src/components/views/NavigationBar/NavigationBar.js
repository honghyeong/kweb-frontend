import axios from "axios";
import React from "react";

function NavigationBar(props) {
  const logOutHandler = (event) => {
    axios.post("/api/auth/logout").then((response) => {
      if (response.data.logoutSuccess) {
        props.history.push("/");
      } else {
        alert("LogOut Failed");
      }
    });
  };

  return (
    <>
      <div>NavigationBar</div>
      <button onSubmit={logOutHandler}>로그아웃</button>
    </>
  );
}

export default NavigationBar;
