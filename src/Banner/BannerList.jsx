import { useQuery } from "@tanstack/react-query";
import UseAxiosSecure from "../CustomHook/UseAxiosSecure";
import { FaTrash } from "react-icons/fa";

const BannerList = () => {
  const axiosSecure = UseAxiosSecure();
  const { data: banner = [] } = useQuery({
    queryKey: ["banner"],
    queryFn: async () => {
      const res = await axiosSecure.get("/banner");
      return res.data;
    },
  });
  return (
    <div className="px-4">
      <h2 className="text-2xl text-[#363433] font-medium font-poppins text-center mt-10">
        All Available Banners
      </h2>
      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr>
              <th></th>
              <th className="text-base font-poppins">Image</th>
              <th className="text-base font-poppins">Name</th>
              <th className="text-base font-poppins">Title</th>
              <th className="text-base font-poppins">Action</th>
              <th className="text-base font-poppins">Status</th>
            </tr>
          </thead>
          <tbody>
            {banner.map((singleBanner, index) => {
              return (
                <tr key={singleBanner._id}>
                  <td>{index + 1}</td>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img src={singleBanner.image} />
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>{singleBanner.bannerName}</td>
                  <td>{singleBanner.title}</td>
                  <td>
                    <button className="btn btn-ghost btn-xs">
                      {" "}
                      <FaTrash className="text-lg text-red-600"></FaTrash>{" "}
                    </button>
                  </td>
                  <td>
                    <button
                      className={`btn btn-sm ${
                        singleBanner.isActive ? "bg-green-500" : "bg-red-500"
                      }`}
                    >
                      {singleBanner.isActive ? "Active" : "Inactive"}
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BannerList;
