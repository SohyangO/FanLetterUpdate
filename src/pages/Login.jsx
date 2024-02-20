import React from "react";
import { useState } from "react";

function Login() {
  const [isLoginForm, setIsLoginForm] = useState(true);

  const renderLoginForm = () => {
    return (
      <>
        <div>
          <form action="">
            <input
              type="text"
              placeholder="아이디 (4~10글자)"
              minLength={4}
              maxLength={10}
            />
            <input
              type="password "
              placeholder="비밀번호 (4~15글자)"
              minLength={4}
              maxLength={15}
            />
          </form>
        </div>
      </>
    );
  };

  const renderSignUpForm = () => {
    return (
      <>
        <div>
          <form action="">
            <input
              type="text"
              placeholder="닉네임(1~10글자)"
              minLength={1}
              maxLength={10}
            />
            <input
              type="text"
              placeholder="아이디 (4~10글자)"
              minLength={4}
              maxLength={10}
            />
            <input
              type="password "
              placeholder="비밀번호 (4~15글자)"
              minLength={4}
              maxLength={15}
            />
          </form>
        </div>
      </>
    );
  };

  const toggleForm = () => {
    setIsLoginForm(!isLoginForm);
  };

  return (
    <>
      <div>
        <h2>{isLoginForm ? "로그인" : "회원가입"}</h2>
        {isLoginForm ? renderLoginForm() : renderSignUpForm()}
        <button onClick={toggleForm}>
          {isLoginForm ? "회원가입" : "로그인"}
        </button>
      </div>
    </>
  );
}

export default Login;
