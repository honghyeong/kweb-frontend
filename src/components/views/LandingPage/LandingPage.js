import axios from "axios";
import React, { useEffect } from "react";
import { Cookies } from "react-cookie";
import { useSelector } from "react-redux";

function LandingPage() {
  // useEffect(() => {
  //   // axios.get("/api/connect").then((response) => console.log(response));
  // }, []);
  const cookie = new Cookies();
  const jwt = cookie.getAll();
  console.log(jwt);
  const onClick = (event) => {
    window.location.href = "/";
  };

  const state = useSelector((state) => state);

  console.log("Selector", state);

  return (
    <div>
      <div onClick={onClick}>LandingPage</div>
      <a href="/">hi</a>
    </div>
  );
}

export default LandingPage;
