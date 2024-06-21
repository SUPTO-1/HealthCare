import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { useQuery } from "@tanstack/react-query";
import UseAxiosSecure from "../CustomHook/UseAxiosSecure";
import AppointmentCard from "./AppointmentCard";

const Appointments = () => {
    const {user} = useContext(AuthContext);
    const axiosSecure = UseAxiosSecure();
    const {data: reservation = []} = useQuery({
        queryKey: ["reservation", user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/reservation/${user.email}`);
            return res.data;
        }
    })
    return (
        <div>
            <h2 className="text-2xl text-center mt-10 font-poppins mb-10">My Upcoming Appointments</h2>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mb-10 px-0 md:px-8 lg:px-44">
                {
                    reservation.map(singleReservation =>(
                        <AppointmentCard key={singleReservation._id} singleReservation = {singleReservation}></AppointmentCard>
                    ))
                }
            </div>
        </div>
    );
};

export default Appointments;