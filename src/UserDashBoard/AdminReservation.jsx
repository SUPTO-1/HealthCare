import { useParams } from "react-router-dom";
import UseAxiosSecure from "../CustomHook/UseAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import AdminReservationCard from "./AdminReservationCard";

const AdminReservation = () => {
    const { testName } = useParams();
    const axiosSecure = UseAxiosSecure();

    const { data: reserved = [] , refetch } = useQuery({
        queryKey: ["reservation", testName],
        queryFn: async () => {
            const res = await axiosSecure.get(`/reservation/forAdmin/${testName}`);
            return res.data;
        },
    });

    return (
        <div>
            <h2 className="text-2xl text-center mt-10 font-poppins mb-10">My Upcoming Appointments</h2>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mb-10 px-0 md:px-8 lg:px-44">
                {
                    reserved.map(singleReservation =>(
                        <AdminReservationCard key={singleReservation._id} singleReservation = {singleReservation} refetch={refetch}></AdminReservationCard>
                    ))
                }
            </div>
        </div>
    );
};

export default AdminReservation;
