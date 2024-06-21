import Swal from "sweetalert2";
import UseAxiosSecure from "../CustomHook/UseAxiosSecure";
import { IoIosMail } from "react-icons/io";
import { Link } from "react-router-dom";

const AdminReservationCard = ({singleReservation , refetch}) => {
    const {name , userImage , email , testName} = singleReservation;
    const axiosSecure = UseAxiosSecure();
    const handleDelete = (singleReservation) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, Cancel it!"
          }).then((result) => {
            if (result.isConfirmed) {
              axiosSecure.delete(`/reservation/${singleReservation._id}`)
              .then(res => {
                console.log(res);
                if (res.data.deletedCount > 0) {
                  Swal.fire(
                    "Deleted!",
                    "Reservation has been Cancel.",
                    "success"
                  );
                  refetch();
                }
              });
            }
          })
    }
    return (
        <div>
            <div className="max-w-xs lg:max-w-sm rounded-md shadow-md dark:bg-gray-50 dark:text-gray-800">
            <img src={userImage} alt="" className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500" />
            <div className="flex flex-col justify-between p-0 md:p-6 space-y-8">
                <div className="space-y-2">
                    <h2 className="text-lg md:text-2xl text-center font-roboto font-semibold tracking-wide hover:text-[#24bca3]">{name}</h2>
                    <p className="font-poppins pt-4 text-sm md:text-lg"><IoIosMail className="inline text-2xl" /> {email}</p>
                </div>
                <button onClick={()=>handleDelete(singleReservation)} type="button" className="flex items-center justify-center w-full p-1 md:p-3 font-semibold tracking-wide rounded-md dark:bg-[#559797] dark:text-gray-50">Cancel Reservation</button>
                <Link to={`/dashboard/submitReport/${singleReservation._id}`}><button type="button" className="flex items-center justify-center w-full p-1 md:p-3 font-semibold tracking-wide rounded-md dark:bg-[#559797] dark:text-gray-50">Submit Report</button></Link>
            </div>
        </div>
        </div>
    );
};

export default AdminReservationCard;