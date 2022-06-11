import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { signInUser } from "../../../_actions/user_action";

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

    console.log("Id:", id);
    console.log("Password:", password);

    let body = {
      id,
      password,
      role,
    };

    // dev
    console.log("body:", body);

    dispatch(signInUser(body)).then((response) => {
      if (response.payload.signInSuccess) {
        props.history.push("/landing");
      } else {
        alert("Login Failed");
      }
    });
  };

  return (
    <>
      <div className="up-box">
        <div>창의적 미래 인재를 양성하고 어쩌고~</div>
        <div className="login-box">
          <div>수강신청 시스템</div>
          <div>COURSE REGISTRATION</div>
          <form onSubmit={onSubmitHandler}>
            <input type="checkbox" value={1} onClick={onRoleHandler} />
            <div>
              <div>아이디</div>
              <input
                type="text"
                placeholder="ID"
                value={id}
                onChange={onIdHandler}
              />
            </div>
            <div>
              <div>패스워드</div>
              <input
                type="password"
                placeholder="PASSWORD"
                value={password}
                onChange={onPasswordHandler}
              />
            </div>
            <div>
              <label>교수</label>
              <input
                type="radio"
                id="instructor"
                value="0"
                checked={role === 0}
                onClick={onRoleHandler}
              />
              <label>학생</label>
              <input
                type="radio"
                id="student"
                value="1"
                checked={role === 1}
                onClick={onRoleHandler}
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
