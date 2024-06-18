import { Outlet } from "react-router-dom";
import Navbar from "../Home/Navbar/Navbar";
import Footer from "../Home/Footer/Footer";

const Root = () => {
//   const location = useLocation();
//   const noHeaderFooter =
//     location.pathname.includes("login") || location.pathname.includes("signup");
  return (
    <div>
        <Navbar></Navbar>
        <Outlet></Outlet>
        <Footer></Footer>
    </div>
    // <div>
    //   {!noHeaderFooter && <Navbar></Navbar>}
    //   <Outlet></Outlet>
    //   {!noHeaderFooter && <Footer></Footer>}
    // </div>
  );
};

export default Root;
