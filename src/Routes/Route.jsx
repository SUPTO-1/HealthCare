import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Home/Home";
import Login from "../Authentication/Login";
import SignUp from "../Authentication/SignUp";
import Dashboard from "../UserDashBoard/Dashboard";
import MyProfile from "../UserDashBoard/MyProfile";
import AddBanner from "../Banner/AddBanner";
import BannerList from "../Banner/BannerList";
import AllTests from "../Alltests/AllTests";
import AddTest from "../Alltests/AddTest";

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
            },
            {
                path:'/allTests',
                element:<AllTests></AllTests>
            },
            {
                path:'dashboard',
                element:<Dashboard></Dashboard>,
                children:[
                    {
                        path:'myProfile',
                        element:<MyProfile></MyProfile>
                    },
                    {
                        path:'addBanner',
                        element:<AddBanner></AddBanner>
                    },
                    {
                        path:'bannerList',
                        element:<BannerList></BannerList>
                    },
                    {
                        path:'addTest',
                        element:<AddTest></AddTest>
                    }
                ]
            }
        ],
    }
])
export default routes