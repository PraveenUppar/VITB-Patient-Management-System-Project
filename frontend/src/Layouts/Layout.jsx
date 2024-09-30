import Sidebar from "../components/Sidebar";
import { Outlet } from "react-router";

const Layout = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 p-8 bg-gray-100">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
