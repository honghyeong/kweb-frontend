import axios from "axios";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { signUpUser } from "../../../_actions/user_action";
import "./SignUpPage.css";

function SignUpPage(props) {
  const dispatch = useDispatch();
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [ucode, setUcode] = useState("");
  const [name, setName] = useState("");
  const [role, setRole] = useState(0);

  const onIdHandler = (event) => {
    setId(event.currentTarget.value);
  };
  const onPasswordHandler = (event) => {
    setPassword(event.currentTarget.value);
  };
  const onNameHandler = (event) => {
    setName(event.currentTarget.value);
  };

  const onUcodeHandler = (event) => {
    setUcode(event.currentTarget.value);
  };

  const onRoleHandler = (event) => {
    setRole(parseInt(event.currentTarget.value));
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();

    let body = {
      id,
      password,
      name,
      ucode,
      role,
    };

    axios.post("/api/auth/signup", body).then((response) => {
      if (response.data.signUpSuccess) {
        props.history.push("/");
      } else {
        alert("SignUp Failed");
      }
    });
  };

  return (
    <>
      <style>
        @import
        url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100&display=swap');
      </style>
      <div className="signup-box">
        <div className="signup-top">회원가입</div>
        <div className="signup-middle">
          <form onSubmit={onSubmitHandler}>
            <div className="signup-inputs">
              <div className="signup-input">
                <div>아이디</div>
                <input
                  type="text"
                  value={id}
                  placeholder="아이디"
                  onChange={onIdHandler}
                />
              </div>
              <div className="signup-input">
                <div>비밀번호</div>
                <input
                  type="password"
                  value={password}
                  placeholder="비밀번호"
                  onChange={onPasswordHandler}
                />
              </div>
              <div className="signup-input">
                <div>이름</div>
                <input
                  type="text"
                  value={name}
                  placeholder="이름"
                  onChange={onNameHandler}
                />
              </div>
              <div className="signup-input">
                <div>학번</div>
                <input
                  type="text"
                  value={ucode}
                  placeholder="학번"
                  onChange={onUcodeHandler}
                />
              </div>
            </div>
            <div className="signup-role">
              <div>
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
            </div>
            <div className="signup-register">
              <button>회원가입</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default SignUpPage;
