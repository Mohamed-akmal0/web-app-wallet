import React, { useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import Password from "../pages/Password";
import Seed from "../pages/Seed";
import LandingPage from "../pages/LandingPage";
import { useAppSelector } from "../redux/store";
import Home from "../pages/Home";

const RootNavigation = () => {
  const navigate = useNavigate();
  const { password } = useAppSelector((state) => state.user);
  useEffect(() => {
    if (password.length) {
      navigate("/home");
    }
  }, []);

  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/password" element={<Password />} />
      <Route path="/seed" element={<Seed />} />
      <Route path="/home" element={<Home />} />
    </Routes>
  );
};

export default RootNavigation;
