import { useQuery } from "@tanstack/react-query";
import UseAxiosSecure from "../CustomHook/UseAxiosSecure";
import { FaTrash } from "react-icons/fa";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import { jsPDF } from "jspdf";
import { MdBlock } from "react-icons/md";
const UserList = () => {
  const axiosSecure = UseAxiosSecure();
  const { data: user = [], refetch } = useQuery({
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
      confirmButtonText: "Yes, change it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.patch(`/user/admin/${single._id}`).then((res) => {
          if (res.data.modifiedCount > 0) {
            Swal.fire({
              title: "Updated!",
              text: "User have been updated to Admin",
              icon: "success",
            });
            refetch();
          }
        });
      }
    });
  };
  const handleBlock = (single) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You want him to block?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, change it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.patch(`/user/block/${single._id}`).then((res) => {
          if (res.data.modifiedCount > 0) {
            Swal.fire({
              title: "Updated!",
              text: "User have been blocked",
              icon: "success",
            });
            refetch();
          }
        });
      }
    });
  };
  const handleDownloadPdf = (single) => {
    const doc = new jsPDF();
    let yPos = 15;
    doc.setFontSize(20);
    doc.text(`User Information - ${single.name}`, 15, yPos);
    yPos += 10;
    doc.setFontSize(14);
    doc.text(`Name: ${single.name}`, 15, yPos);
    yPos += 10;
    doc.text(`Email: ${single.email}`, 15, yPos);
    yPos += 10;
    doc.text(`District: ${single.district}`, 15, yPos);
    yPos += 10;
    doc.text(`Upazila: ${single.upazila}`, 15, yPos);
    yPos += 10;
    doc.text(`Blood Group: ${single.bloodGroup}`, 15, yPos);
    yPos += 10;
    if (single.photo) {
      doc.text(`Photo:`, 15, yPos);
      doc.addImage(single.photo, "JPEG", 15, yPos + 5, 50, 50);
    }

    doc.save(`${single.name}_info.pdf`);
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
                      <Link to={`/dashboard/singleUser/${single._id}`}>
                        <button className="btn btn-ghost btn-xs">
                          Details
                        </button>
                      </Link>
                    </td>
                    <td>
                      {single.role === "admin" ? (
                        "Admin"
                      ) : (
                        <button
                          onClick={() => handleMakeAdmin(single)}
                          className="btn btn-ghost btn-xs"
                        >
                          User
                        </button>
                      )}
                    </td>
                    <td>
                      {single.status === "blocked" ? (
                        "Blocked"
                      ) : (
                        <button
                          onClick={() => handleBlock(single)}
                          className="btn btn-ghost btn-xs"
                        >
                          {" "}
                          <MdBlock className="text-lg text-red-600"></MdBlock>{" "}
                        </button>
                      )}
                    </td>
                    <td>
                      <button
                        onClick={() => handleDownloadPdf(single)}
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
