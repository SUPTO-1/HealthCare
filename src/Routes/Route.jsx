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
import Recommendation from "../Recommendation/Recommendation";
import PrivateRoute from "./PrivateRoute";
import UserList from "../AllUsers/UserList";
import AdminRoute from "./AdminRoute";
import SingleUser from "../AllUsers/SingleUser";
import Appointments from "../UserDashBoard/Appointments";
import AdminReservation from "../UserDashBoard/AdminReservation";
import SubmitReport from "../UserDashBoard/SubmitReport";
import TestResults from "../Alltests/TestResults";
import AddDoctor from "../Doctor/AddDoctor";
import AllDoctor from "../Doctor/AllDoctor";
import DoctorDetails from "../Doctor/DoctorDetails";
import Payment from "../Payment/Payment";
import Chart from "../Home/Chart/Chart";
import Error from "../Error/Error";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement:<Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
      {
        path: "/allTests",
        element: <AllTests></AllTests>,
      },
      {
        path: "/details/:id",
        element: (
          <PrivateRoute>
            <Details></Details>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000//test/${params.id}`),
      },
      {
        path: "payment/:id",
        element: <Payment></Payment>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000//test/${params.id}`),
      },
      {
        path: "/allDoctor",
        element: <AllDoctor></AllDoctor>,
      },
      {
        path: "/doctorDetails/:id",
        element: (
          <PrivateRoute>
            {" "}
            <DoctorDetails></DoctorDetails>{" "}
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000//doctor/${params.id}`),
      },
      {
        path: "/chart",
        element: <Chart></Chart>,
      },
      {
        path: "dashboard",
        element: (
          <PrivateRoute>
            <Dashboard></Dashboard>
          </PrivateRoute>
        ),
        children: [
          {
            path: "myProfile",
            element: <MyProfile></MyProfile>,
          },
          {
            path: "addBanner",
            element: (
              <AdminRoute>
                <AddBanner></AddBanner>
              </AdminRoute>
            ),
          },
          {
            path: "bannerList",
            element: (
              <AdminRoute>
                <BannerList></BannerList>
              </AdminRoute>
            ),
          },
          {
            path: "addTest",
            element: (
              <AdminRoute>
                <AddTest></AddTest>
              </AdminRoute>
            ),
          },
          {
            path: "allTestAdmin",
            element: (
              <AdminRoute>
                <AllTestTable></AllTestTable>
              </AdminRoute>
            ),
          },
          {
            path: "editTest/:id",
            element: (
              <AdminRoute>
                <EditTest></EditTest>
              </AdminRoute>
            ),
            loader: ({ params }) =>
              fetch(`http://localhost:5000//test/${params.id}`),
          },
          {
            path: "recommendation",
            element: <Recommendation></Recommendation>,
          },
          {
            path: "userList",
            element: (
              <AdminRoute>
                <UserList></UserList>
              </AdminRoute>
            ),
          },
          {
            path: "singleUser/:id",
            element: (
              <AdminRoute>
                <SingleUser></SingleUser>
              </AdminRoute>
            ),
            loader: ({ params }) =>
              fetch(`http://localhost:5000//user/singleUser/${params.id}`),
          },
          {
            path: "appointments",
            element: <Appointments></Appointments>,
          },
          {
            path: "adminReservation/:testName",
            element: (
              <AdminRoute>
                <AdminReservation></AdminReservation>
              </AdminRoute>
            ),
          },
          {
            path: "submitReport/:id",
            element: <SubmitReport></SubmitReport>,
          },
          {
            path: "testResults",
            element: <TestResults></TestResults>,
          },
          {
            path: "addDoctor",
            element: <AddDoctor></AddDoctor>,
          },
        ],
      },
    ],
  },
]);
export default routes;
