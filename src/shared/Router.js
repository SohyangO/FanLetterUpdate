import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "pages/home";
import Detail from "pages/detail";
import Login from "pages/Login";
import Profile from "pages/Profile";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="detail/:id" element={<Detail />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
