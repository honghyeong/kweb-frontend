import axios from "axios";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { signUpUser } from "../../../_actions/user_action";

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
    // dispatch(signUpUser(body)).then((response) => {
    //   if (response.payload.signUpSuccess) {
    //     props.history.push("/");
    //   } else {
    //     alert("SignUp Failed");
    //   }
    // });
  };

  return (
    <>
      <div>SignUpPage</div>
      <div>Image</div>
      <div>
        <form onSubmit={onSubmitHandler}>
          <div id="id">
            <div>아이디</div>
            <input
              type="text"
              value={id}
              placeholder="id"
              onChange={onIdHandler}
            />
          </div>
          <div id="password">
            <div>비밀번호</div>
            <input
              type="password"
              value={password}
              placeholder="password"
              onChange={onPasswordHandler}
            />
          </div>
          <div id="name">
            <div>이름</div>
            <input
              type="text"
              value={name}
              placeholder="name"
              onChange={onNameHandler}
            />
          </div>
          <div id="ucode">
            <div>학번</div>
            <input
              type="text"
              value={ucode}
              placeholder="ucode"
              onChange={onUcodeHandler}
            />
          </div>
          <div id="role">
            <div>
              <label>학생</label>
              <input
                type="radio"
                id="student"
                value="1"
                checked={role == 1}
                onClick={onRoleHandler}
              />
            </div>
            <div>
              <label>교수</label>
              <input
                type="radio"
                id="instructor"
                value="0"
                checked={role == 0}
                onClick={onRoleHandler}
              />
            </div>
          </div>
          <button>Register</button>
        </form>
      </div>
    </>
  );
}

export default SignUpPage;
