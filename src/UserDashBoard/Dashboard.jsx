import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { NavLink, Outlet } from "react-router-dom";
import { FaRegCalendarCheck, FaImages, FaBars, FaArrowRight } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { GrNotes } from "react-icons/gr";
import { GiHypodermicTest } from "react-icons/gi";
import { FaImage, FaUsers } from "react-icons/fa6";
import { MdAddModerator } from "react-icons/md";
import UseAdmin from "../CustomHook/UseAdmin";
import UseAxiosPublic from "../CustomHook/UseAxiosPublic";
import { useQuery } from "@tanstack/react-query";

const Dashboard = () => {
  const { user, loading } = useContext(AuthContext);
  const [displayName, setDisplayName] = useState("");
  const [photoURL, setPhotoURL] = useState("");
  const [isAdmin] = UseAdmin();
  const axiosPublic = UseAxiosPublic();
  const handleSidebar = () => {
    document.getElementById("my-drawer-2").checked = false;
  };

  const { data: single = [] } = useQuery({
    queryKey: ["user", user?.email],
    queryFn: async () => {
      if (user) {
        const res = await axiosPublic.get(`/user/${user.email}`);
        return res.data;
      }
      return [];
    },
  });
  useEffect(() => {
    if (user) {
      setDisplayName(user?.displayName);
      setPhotoURL(user?.photoURL);
    }
  }, [user]);
  if (loading) {
    return;
  }
  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content ">
        <label
          htmlFor="my-drawer-2"
          className="btn bg-[#7AB2B2] drawer-button lg:hidden"
        >
          <FaArrowRight></FaArrowRight>
        </label>
        <div>
          <Outlet></Outlet>
        </div>
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-2"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu p-4 w-80 min-h-full text-base-content bg-[#80B9AD] ">
          <button
            className=" lg:hidden btn bg-[#7AB2B2]"
            onClick={handleSidebar}
          >
            X
          </button>
          <div className="avatar pt-10 mx-auto">
            <div className="w-16 md:w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              <img src={single.photo} />
            </div>
          </div>
          <h2 className="text-sm md:text-xl text-center mb-5 font-montserrat mt-4 font-medium">
            {single.name}
          </h2>
          <div className="divider"></div>
          {isAdmin ? (
            <>
              <li className="text-sm md:text-xl font-poppins">
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "text-[#3f41ca]" : ""
                  }
                  to="/dashboard/myProfile"
                >
                  {" "}
                  <CgProfile className="text-sm md:text-2xl text-[#367f96]"></CgProfile>{" "}
                  My Profile
                </NavLink>
              </li>
              <li className="text-sm md:text-xl font-poppins mt-4">
                {" "}
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "text-[#3f41ca]" : ""
                  }
                  to="/dashboard/appointments"
                >
                  {" "}
                  <FaRegCalendarCheck className="text-sm md:text-2xl text-[#367f96]" />{" "}
                  Appointments
                </NavLink>{" "}
              </li>
              <li className="text-sm md:text-xl font-poppins mt-4">
                {" "}
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "text-[#3f41ca]" : ""
                  }
                  to="/dashboard/testResults"
                >
                  {" "}
                  <GrNotes className="text-sm md:text-2xl text-[#367f96]" />{" "}
                  Test Results
                </NavLink>{" "}
              </li>
              <div className="divider"></div>
              <li className="text-sm md:text-xl font-poppins mt-4">
                {" "}
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "text-[#3f41ca]" : ""
                  }
                  to="/dashboard/userList"
                >
                  {" "}
                  <FaUsers className="text-sm md:text-2xl text-[#367f96]" />
                  User List
                </NavLink>{" "}
              </li>
              <li className="text-sm md:text-xl font-poppins mt-4">
                {" "}
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "text-[#3f41ca]" : ""
                  }
                  to="/dashboard/addBanner"
                >
                  {" "}
                  <FaImage className="text-sm md:text-2xl text-[#367f96]" /> Add
                  Banner
                </NavLink>{" "}
              </li>
              <li className="text-sm md:text-xl font-poppins mt-4">
                {" "}
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "text-[#3f41ca]" : ""
                  }
                  to="/dashboard/bannerList"
                >
                  {" "}
                  <FaImages className="text-sm md:text-2xl text-[#367f96]" />{" "}
                  Banner List
                </NavLink>{" "}
              </li>
              <li className="text-sm md:text-xl font-poppins mt-4">
                {" "}
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "text-[#3f41ca]" : ""
                  }
                  to="/dashboard/addTest"
                >
                  {" "}
                  <MdAddModerator className="text-sm md:text-2xl text-[#367f96]" />{" "}
                  Add Test
                </NavLink>{" "}
              </li>
              <li className="text-sm md:text-xl font-poppins mt-4">
                {" "}
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "text-[#3f41ca]" : ""
                  }
                  to="/dashboard/allTestAdmin"
                >
                  {" "}
                  <FaBars className="text-sm md:text-2xl text-[#367f96]" /> All
                  Test
                </NavLink>{" "}
              </li>
              <li className="text-sm md:text-xl font-poppins mt-4">
                {" "}
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "text-[#3f41ca]" : ""
                  }
                  to="/dashboard/recommendation"
                >
                  {" "}
                  <MdAddModerator className="text-sm md:text-2xl text-[#367f96]" />
                  Add Recommendation
                </NavLink>{" "}
              </li>
            </>
          ) : (
            <>
              <li className="text-sm md:text-xl font-poppins">
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "text-[#3f41ca]" : ""
                  }
                  to="/dashboard/myProfile"
                >
                  {" "}
                  <CgProfile className="text-sm md:text-2xl text-[#367f96]"></CgProfile>{" "}
                  My Profile
                </NavLink>
              </li>
              <li className="text-sm md:text-xl font-poppins mt-4">
                {" "}
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "text-[#3f41ca]" : ""
                  }
                  to="/dashboard/appointments"
                >
                  {" "}
                  <FaRegCalendarCheck className="text-sm md:text-2xl text-[#367f96]" />{" "}
                  Appointments
                </NavLink>{" "}
              </li>
              <li className="text-sm md:text-xl font-poppins mt-4">
                {" "}
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "text-[#3f41ca]" : ""
                  }
                  to="/dashboard/testResults"
                >
                  {" "}
                  <GrNotes className="text-sm md:text-2xl text-[#367f96]" />{" "}
                  Test Results
                </NavLink>{" "}
              </li>
            </>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
