import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import UseAxiosSecure from "../CustomHook/UseAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import TestResultCard from "./TestResultCard";

const TestResults = () => {
    const {user} = useContext(AuthContext);
    const axiosSecure = UseAxiosSecure();
    const {data: result = [] } = useQuery({
        queryKey: ["result", user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/result/${user.email}`);
            return res.data;
        }
    })
    return (
        <div>
            <h2 className="text-2xl text-center mt-10 font-poppins mb-10">My Test Results</h2>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mb-10 px-0 md:px-8 lg:px-44">
                {
                    result.map(singleReservation =>(
                        <TestResultCard key={singleReservation._id} singleReservation = {singleReservation}></TestResultCard>
                    ))
                }
            </div>
        </div>
    );
};

export default TestResults;