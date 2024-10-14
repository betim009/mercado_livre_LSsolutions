import { Outlet } from "react-router-dom";
import Footer from "../footer";
import MyNavBar from "../my-nav-bar";

export default function Layout() {
  return (
    <>
      <MyNavBar />
      <Outlet />
      <Footer />
    </>
  );
}
