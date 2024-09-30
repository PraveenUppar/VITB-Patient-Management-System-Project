import Sidebar from "../components/Sidebar";
import { Outlet } from "react-router";

const Layout = () => {
  return (
    <div className="">
      <Sidebar></Sidebar>
      <Outlet></Outlet>
      <div className=""></div>
    </div>
  );
};
export default Layout;
