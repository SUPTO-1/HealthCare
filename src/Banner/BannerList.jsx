import { useQuery } from "@tanstack/react-query";
import UseAxiosSecure from "../CustomHook/UseAxiosSecure";
import { FaTrash } from "react-icons/fa";
import Swal from "sweetalert2";

const BannerList = () => {
  const axiosSecure = UseAxiosSecure();
  const { data: banner = [] , refetch } = useQuery({
    queryKey: ["banner"],
    queryFn: async () => {
      const res = await axiosSecure.get("/banner");
      return res.data;
    },
  });
  const handleDelete = (singleBanner) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/banner/${singleBanner._id}`)
        .then(res => {
          console.log(res);
          if (res.data.deletedCount > 0) {
            Swal.fire(
              "Deleted!",
              "Banner has been deleted.",
              "success"
            );
            refetch();
          }
        });
      }
    })
  }
  // active and inactive part
  const handleActiveBanner = (singleBanner) =>{
    axiosSecure.patch(`/banner/active/${singleBanner._id}`)
   .then(res =>{
    if(res.data.modifiedCount>0)
      {
        Swal.fire({
          title: "Success!",
          text: "Banner has been activated",
          icon: "success",
          confirmButtonText: "Okay",
        });
        refetch();
      }
   } )
  }
  return (
    <div className="px-4">
      <h2 className="text-2xl text-[#363433] font-medium font-poppins text-center my-10">
        All Available Banners
      </h2>
     <div className="min-w-screen">
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
                    <button onClick={()=>handleDelete(singleBanner)} className="btn btn-ghost btn-xs">
                      {" "}
                      <FaTrash className="text-lg text-red-600"></FaTrash>{" "}
                    </button>
                  </td>
                  <td>
                    <button onClick={()=>handleActiveBanner(singleBanner)} className="btn btn-sm bg-green-600">
                      {
                        singleBanner.isActive
                      }
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
     </div>
    </div>
  );
};

export default BannerList;
