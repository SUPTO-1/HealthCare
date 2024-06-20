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
import Details from "../Alltests/Details";
import AllTestTable from "../Alltests/AllTestTable";
import EditTest from "../Alltests/EditTest";

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
                path:'/details/:id',
                element:<Details></Details>,
                loader:({params})=>fetch(`http://localhost:5000/test/${params.id}`)
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
                    },
                    {
                        path:'allTestAdmin',
                        element:<AllTestTable></AllTestTable>
                    },
                    {
                        path:'editTest/:id',
                        element:<EditTest></EditTest>,
                        loader:({params})=>fetch(`http://localhost:5000/test/${params.id}`)
                    }
                ]
            }
        ],
    }
])
export default routes