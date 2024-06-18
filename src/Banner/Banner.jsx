import { useQuery } from "@tanstack/react-query";
import UseAxiosSecure from "../CustomHook/UseAxiosSecure";

const Banner = () => {
  const axiosSecure = UseAxiosSecure();

  const { data: selectedBanner, isLoading, error } = useQuery({
    queryKey: ['activeBanner'],
    queryFn: async () => {
      const res = await axiosSecure.get('/banner/active');
      console.log(res.data);
      return res.data;
    },
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error loading banner data</div>;
  }

  return (
    <div className="bg-gradient-to-r from-[#7AB2B2] to-[#559797] p-0 md:p-20">
      <div className="flex justify-between bg-[#57A6A1] rounded-lg shadow-2xl p-2 md:p-10">
        <div className="flex-1 flex justify-center items-center p-2 md:p-5">
          {selectedBanner && (
            <img
              className="h-[200px] w-[200px] md:w-[400px] md:h-[400px] lg:w-[500px] lg:h-[500px] rounded-full shadow-lg"
              src={selectedBanner.image}
              alt={selectedBanner.bannerName}
            />
          )}
        </div>
        <div className="flex-1 text-center mt-5 md:mt-0 text-white p-2 md:p-5">
          {selectedBanner && (
            <>
              <h2 className="text-sm md:text-4xl font-poppins font-medium md:font-bold">{selectedBanner.bannerName}</h2>
              <p className="text-sm md:text-5xl font-poppins font-normal md:font-bold mt-2 md:mt-4">{selectedBanner.title}</p>
              <p className="text-xs md:text-xl font-montserrat mt-2 md:mt-4">{selectedBanner.description}</p>
              <div className="bg-[#7AB2B2] mx-auto text-white rounded-full w-[100px] h-[100px] md:w-[200px] md:h-[200px] flex items-center justify-center mt-4 md:mt-10 shadow-lg">
                <div className="text-center">
                  <p className=" text-xs md:text-lg font-medium md:font-bold font-poppins">Discount <span className=" font-lg md:text-2xl">{selectedBanner.couponRate}%</span></p>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Banner;
