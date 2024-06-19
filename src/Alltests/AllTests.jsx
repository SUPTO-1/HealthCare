import { useQuery } from "@tanstack/react-query";
import UseAxiosPublic from "../CustomHook/UseAxiosPublic";
import TestCard from "./TestCard";
import banner from "../assets/images/alltestBanner.jpg";

const AllTests = () => {
  const axiosPublic = UseAxiosPublic();
  const { data: tests = [] } = useQuery({
    queryKey: ["tests"],
    queryFn: async () => {
      const res = await axiosPublic.get("/test");
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
  <div className="grid flex-grow h-32 text-3xl font-roboto font-semibold text-[#FFF] card rounded-box bg-[#559797] place-items-center">AVAILABLE TEST</div> 
  <div className=" md:divider-horizontal w-full border-white bg-white border-[10px]"></div> 
  <div className="grid flex-grow h-32 card text-[#FFF] font-medium bg-[#559797] text-2xl font-poppins rounded-box place-items-center">Your Health Is Our Responsibility</div>
</div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 px-8 lg:px-44">
        {tests.map((test) => (
          <TestCard key={test._id} test={test}></TestCard>
        ))}
      </div>
    </div>
  );
};

export default AllTests;
