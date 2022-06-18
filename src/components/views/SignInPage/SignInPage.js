import React, { useState } from "react";
import { useCookies } from "react-cookie";
import { useDispatch } from "react-redux";
import { setCookie } from "../../../utils/Cookie";
import { signInUser } from "../../../_actions/user_action";
import "./SignInPage.css";

function SignInPage(props) {
  const dispatch = useDispatch();
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState(0);

  const onIdHandler = (event) => {
    setId(event.currentTarget.value);
  };
  const onPasswordHandler = (event) => {
    setPassword(event.currentTarget.value);
  };

  const onRoleHandler = (event) => {
    setRole(parseInt(event.currentTarget.value));
  };
  const onSubmitHandler = (event) => {
    event.preventDefault();

    let body = {
      id,
      password,
      role,
    };

    // dev
    // console.log("body:", body);

    dispatch(signInUser(body)).then((response) => {
      if (response.payload.signInSuccess) {
        props.history.push("/lecture");
      } else {
        alert("Login Failed");
      }
    });
  };

  return (
    <>
      <style>
        @import
        url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100&display=swap');
      </style>
      <div className="up-box"></div>
      <div className="middle-box">
        <div className="login-box">
          <div className="login-box-top">수강신청 시스템</div>
          <div className="login-box-middle">COURSE REGISTRATION</div>
          <form onSubmit={onSubmitHandler}>
            <div className="login-role">
              <div></div>
              <input
                type="radio"
                id="instructor"
                value="0"
                checked={role === 0}
                onClick={onRoleHandler}
              />
              <label>교수</label>
              <input
                type="radio"
                id="student"
                value="1"
                checked={role === 1}
                onClick={onRoleHandler}
              />
              <label>학생</label>
            </div>
            <div className="login-box-user">
              <input
                className="login-input"
                type="text"
                placeholder="ID"
                value={id}
                onChange={onIdHandler}
              />
              <input
                className="login-input"
                type="password"
                placeholder="PASSWORD"
                value={password}
                onChange={onPasswordHandler}
              />
            </div>

            <button>LOGIN</button>
          </form>
        </div>
        <div></div>
      </div>

      <div className="down-box"></div>
    </>
  );
}

export default SignInPage;
