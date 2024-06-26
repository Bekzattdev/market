import { Route, Routes } from "react-router-dom";
import Login from "../Authentication/Authorization/Login";
import Register from "../Authentication/Registration/Register";

const MainRoutes = () => {
  const routes = [
    {
      link: "/signup",
      element: <Register />,
      id: 1,
    },
    {
      link: "/signin",
      element: <Login />,
      id: 2,
    },
  ];
  return (
    <Routes>
      {routes.map((route) => (
        <Route path={route.link} element={route.element} key={route.id} />
      ))}
    </Routes>
  );
};

export default MainRoutes;
