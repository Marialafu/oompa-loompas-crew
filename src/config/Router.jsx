import { Route, Routes } from "react-router-dom";
import Home from "../pages/home/Home";
import Detail from "../pages/detail/Detail";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/:id" element={<Detail />} />
    </Routes>
  );
};

export default Router;
