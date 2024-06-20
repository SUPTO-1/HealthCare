import { useQuery } from "@tanstack/react-query";
import UseAxiosPublic from "../CustomHook/UseAxiosPublic";
import { FaEdit, FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";

const AllTestTable = () => {
  const axiosPublic = UseAxiosPublic();
  const { data: tests = [] } = useQuery({
    queryKey: ["tests"],
    queryFn: async () => {
      const res = await axiosPublic.get("/test");
      return res.data;
    },
  });
  return (
    <div className="md:px-4">
      <h2 className="text-2xl text-[#363433] font-medium font-poppins text-center my-10">
        All Available Test
      </h2>
      <div className="min-w-screen">
        <div className="overflow-x-auto">
          <table className="table">
            <thead>
              <tr>
                <th></th>
                <th className="text-base font-poppins">Image</th>
                <th className="text-base font-poppins">Name</th>
                <th className="text-base font-poppins">Price</th>
                <th className="text-base font-poppins">Slot</th>
                <th className="text-base font-poppins">Edit</th>
                <th className="text-base font-poppins">Delete</th>
              </tr>
            </thead>
            <tbody>
              {tests.map((test, index) => {
                return (
                  <tr key={test._id}>
                    <td>{index + 1}</td>
                    <td>
                      <div className="flex items-center gap-3">
                        <div className="avatar">
                          <div className="mask mask-squircle w-12 h-12">
                            <img src={test.image} />
                          </div>
                        </div>
                      </div>
                    </td>
                    <td>{test.testName}</td>
                    <td>{test.testFee}</td>
                    <td> {test.slot} </td>
                    <td>
                      <Link to={`/dashboard/editTest/${test._id}`}>
                      <button
                       
                        className="btn btn-ghost btn-xs"
                      >
                        {" "}
                        <FaEdit className="text-lg text-red-600"></FaEdit>{" "}
                      </button>
                      </Link>
                    </td>
                    <td>
                    <button
                       
                       className="btn btn-ghost btn-xs"
                     >
                       {" "}
                       <FaTrash className="text-lg text-red-600"></FaTrash>{" "}
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

export default AllTestTable;
