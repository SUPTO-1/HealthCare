import { useQuery } from "@tanstack/react-query";
import UseAxiosPublic from "../CustomHook/UseAxiosPublic";
import banner from "../assets/images/alltestBanner.jpg";
import DoctorCard from "./DoctorCard";
const AllDoctor = () => {
    const axiosPublic = UseAxiosPublic();
  const { data: doctor = [] } = useQuery({
    queryKey: ["doctor"],
    queryFn: async () => {
      const res = await axiosPublic.get("/doctor");
      return res.data;
    },
  });
    return (
      <div>
      <div>
        <div>
          <img src={banner} alt="" />
        </div>
        <div className="mx-auto text-center mb-8 bg-[#559797] ">
          <div className="flex flex-col w-full lg:flex-row">
            <div className="grid flex-grow h-32 text-3xl font-roboto font-semibold text-[#FFF] card rounded-box bg-[#559797] place-items-center">
              ALL DOCTORS
            </div>
            <div className="lg:divider-horizontal w-full border-white bg-white border-[10px]"></div>
            <div className="grid flex-grow h-32 card text-[#FFF] font-medium bg-[#559797] text-2xl font-poppins rounded-box place-items-center">
              Your Health Is Our Responsibility
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 px-8 lg:px-44">
        {doctor.map((singleDoctor) => (
          <DoctorCard key={singleDoctor._id} singleDoctor={singleDoctor}></DoctorCard>
        ))}
      </div>
    </div>
    );
};

export default AllDoctor;