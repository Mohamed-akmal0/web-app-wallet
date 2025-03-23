import { useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import { useAppSelector } from "../redux/store";
import { routes, RouteInterace } from "./routes";

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
      {routes.map((route: RouteInterace, index: number) => {
        return (
          <Route key={index} path={route.path} element={<route.component />} />
        );
      })}
    </Routes>
  );
};

export default RootNavigation;
