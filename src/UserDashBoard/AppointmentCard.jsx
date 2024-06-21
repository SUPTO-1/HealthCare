import { IoIosMail } from "react-icons/io";
import { LuCalendarCheck } from "react-icons/lu";
import UseAxiosSecure from "../CustomHook/UseAxiosSecure";
import Swal from "sweetalert2";

const AppointmentCard = ({singleReservation , refetch}) => {
    const {testName , date , image , email} = singleReservation;
    const axiosSecure = UseAxiosSecure();
    const handleDelete = (singleReservation) => {
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
              axiosSecure.delete(`/reservation/${singleReservation._id}`)
              .then(res => {
                console.log(res);
                if (res.data.deletedCount > 0) {
                  Swal.fire(
                    "Deleted!",
                    "Appointment has been deleted.",
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
            <img src={image} alt="" className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500" />
            <div className="flex flex-col justify-between p-0 md:p-6 space-y-8">
                <div className="space-y-2">
                    <h2 className="text-lg md:text-2xl text-center font-roboto font-semibold tracking-wide hover:text-[#24bca3]">{testName}</h2>
                    <p className="font-poppins pt-4 text-sm md:text-lg"><IoIosMail className="inline text-2xl" /> {email}</p>
                    <p className="font-poppins pt-4 text-sm md:text-lg"><LuCalendarCheck className="inline text-2xl" /> {date}</p>
                </div>
                <button onClick={()=>handleDelete(singleReservation)} type="button" className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md dark:bg-[#559797] dark:text-gray-50">Cancel Appointment</button>
            </div>
        </div>
        </div>
    );
};

export default AppointmentCard;