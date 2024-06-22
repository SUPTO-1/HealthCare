import { useQuery } from "@tanstack/react-query";
import UseAxiosPublic from "../CustomHook/UseAxiosPublic";
import FeaturedCard from "./FeaturedCard";

const FeaturedTest = () => {
  const axiosPublic = UseAxiosPublic();
  const { data: featured = [] } = useQuery({
    queryKey: ["featured-test"],
    queryFn: async () => {
      const res = await axiosPublic.get("/featured-tests");
      return res.data;
    },
  });
  return (
    <div>
      <h2 className="grid flex-grow h-32 card font-medium text-2xl font-poppins rounded-box place-items-center">
        {" "}
        Mostly Booked Test{" "}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 px-8 lg:px-44">
        {featured.map((singleFeature) => (
          <FeaturedCard
            key={singleFeature._id}
            singleFeature={singleFeature}
          ></FeaturedCard>
        ))}
      </div>
    </div>
  );
};

export default FeaturedTest;
