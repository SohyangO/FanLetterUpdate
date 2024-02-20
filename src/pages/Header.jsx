import React from "react";
import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();

  const handleClickLogin = () => {
    navigate("/Login");
  };
  return (
    <>
      <header>
        <h1>home</h1>
        <nav>내 프로필</nav>
        <button onClick={handleClickLogin}>로그인</button>
      </header>
    </>
  );
}

export default Header;
