import { Outlet, useLocation } from "react-router";

const AppLayout = () => {
  const location = useLocation();
  return (
    <div className="main-container">
      <div
        className={`app-container ${location.pathname === "/" ? "end" : ""}`}
      >
        <Outlet />
      </div>
    </div>
  );
};

export default AppLayout;
