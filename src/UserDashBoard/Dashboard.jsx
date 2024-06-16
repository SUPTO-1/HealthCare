import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { NavLink, Outlet } from "react-router-dom";
import { FaRegCalendarCheck } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { GrNotes } from "react-icons/gr";
import { GiHypodermicTest } from "react-icons/gi";

const Dashboard = () => {
  const { user, loading } = useContext(AuthContext);
  const [displayName, setDisplayName] = useState("");
  const [photoURL, setPhotoURL] = useState("");
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
    <div className="flex">
      <div className="bg-[#80B9AD] w-[40%] md:w-[20%] text-center min-h-screen">
        <div className="avatar pt-10">
          <div className="w-16 md:w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
            <img src={photoURL} />
          </div>
        </div>
        <h2 className="text-sm md:text-xl font-montserrat mt-4 font-medium">{displayName}</h2>
        <div className="divider"></div>
        <ul className="menu pl-0 ml-0">
          <li className="text-sm md:text-xl font-poppins"><NavLink className={({ isActive }) => (isActive ? "border-b-2" : "")} to='/dashboard/myProfile'> <CgProfile className="text-sm md:text-2xl text-[#367f96]"></CgProfile>  My Profile</NavLink></li>
          <li className="text-sm md:text-xl font-poppins mt-4"><NavLink to='/dashboard/takeAppointment'> <GiHypodermicTest className="text-sm md:text-2xl text-[#367f96]"/>  Take Appointment</NavLink></li>
          <li className="text-sm md:text-xl font-poppins mt-4"> <NavLink to='/dashboard/appointments'> <FaRegCalendarCheck className="text-sm md:text-2xl text-[#367f96]" /> Appointments</NavLink> </li>
          <li className="text-sm md:text-xl font-poppins mt-4"> <NavLink to='/dashboard/testResults'> <GrNotes className="text-sm md:text-2xl text-[#367f96]" /> Test Results</NavLink> </li>
        </ul>
      </div>
      <div className="flex-1">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;
