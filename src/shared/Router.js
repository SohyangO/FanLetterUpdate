import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "pages/home";
import Detail from "pages/detail";
import Login from "pages/Login";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="detail/:id" element={<Detail />} />
        <Route path="/Login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
