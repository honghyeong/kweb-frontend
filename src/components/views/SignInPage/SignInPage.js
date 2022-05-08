import React, { useState } from "react";

function SignInPage() {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");

  const onIdHandler = (event) => {
    setId(event.currentTarget.value);
  };
  const onPasswordHandler = (event) => {
    setPassword(event.currentTarget.value);
  };
  const onSubmitHandler = (event) => {
    event.preventDefault();
  };

  return (
    <>
      <div className="up-box">
        <div>창의적 미래 인재를 양성하고 어쩌고~</div>
        <div className="login-box">
          <div>수강신청 시스템</div>
          <div>COURSE REGISTRATION</div>
          <form onSubmit={onSubmitHandler}>
            <input type="checkbox" />
            <input
              type="text"
              placeholder="ID"
              value={id}
              onChange={onIdHandler}
            />
            <input
              type="password"
              placeholder="PASSWORD"
              value={password}
              onChange={onPasswordHandler}
            />
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
