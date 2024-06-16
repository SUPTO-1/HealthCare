import { Outlet } from "react-router-dom";
import Navbar from "../Home/Navbar/Navbar";
import Footer from "../Home/Footer/Footer";

const Root = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;