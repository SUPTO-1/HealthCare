import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Home/Home";
import Login from "../Authentication/Login";
import SignUp from "../Authentication/SignUp";

const routes = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        children: [
            {
                path: "/",
                element:<Home></Home>
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path:'/signup',
                element:<SignUp></SignUp>
            }
        ],
    }
])
export default routes