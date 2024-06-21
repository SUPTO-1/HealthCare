import { useQuery } from "@tanstack/react-query";
import UseAxiosSecure from "../CustomHook/UseAxiosSecure";
import { FaTrash } from "react-icons/fa";
import Swal from "sweetalert2";

const UserList = () => {
    const axiosSecure = UseAxiosSecure();
    const { data: user = [] , refetch } = useQuery({
        queryKey: ["user"],
        queryFn: async () => {
          const res = await axiosSecure.get("/user");
          return res.data;
        },
      });
      const handleMakeAdmin = (single) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You want him to make admin?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, change it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.patch(`/user/admin/${single._id}`)
                    .then(res => {
                        if (res.data.modifiedCount > 0) {
                            Swal.fire({
                                title: "Updated!",
                                text: "User have been updated to Admin",
                                icon: "success"
                            });
                            refetch();
                        }
                    });
            }});
        };
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
                  <th className="text-base font-poppins">Email</th>
                  <th className="text-base font-poppins">See Info</th>
                  <th className="text-base font-poppins">Role</th>
                  <th className="text-base font-poppins">Status</th>
                  <th className="text-base font-poppins">Pdf Format</th>
                </tr>
              </thead>
              <tbody>
                {user.map((single, index) => {
                  return (
                    <tr key={single._id}>
                      <td>{index + 1}</td>
                      <td>
                        <div className="flex items-center gap-3">
                          <div className="avatar">
                            <div className="mask mask-squircle w-12 h-12">
                              <img src={single.photo} />
                            </div>
                          </div>
                        </div>
                      </td>
                      <td>{single.name}</td>
                      <td>{single.email}</td>
                      <td>
                        <button
                         
                          className="btn btn-ghost btn-xs"
                        >
                            Details
                        </button>
                      </td>
                      <td>
                       {
                        single.role === "admin"? "Admin":  <button onClick={()=>handleMakeAdmin(single)}
                         
                        className="btn btn-ghost btn-xs"
                      >
                          User
                      </button>
                       }
                      </td>
                      <td>
                      <button
                         
                         className="btn btn-ghost btn-xs"
                       >
                         {" "}
                         <FaTrash className="text-lg text-red-600"></FaTrash>{" "}
                       </button>
                      </td>
                      <td>
                        <button
                         
                          className="btn btn-ghost btn-xs"
                        >
                            Download
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

export default UserList;