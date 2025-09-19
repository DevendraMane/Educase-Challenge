import { Outlet } from "react-router";

const AppLayout = () => {
  return (
    <div className="main-container">
      <div className="app-container">
        <Outlet />
      </div>
    </div>
  );
};

export default AppLayout;
