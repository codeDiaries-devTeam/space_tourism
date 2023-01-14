import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "../components/Navbar";
import Destination from "../pages/Destination";
import Home from "../pages/Home";
import datas from "../data.json";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <div className="relative w-full">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/destination"
            element={<Destination data={datas.destinations} />}
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default AppRouter;
