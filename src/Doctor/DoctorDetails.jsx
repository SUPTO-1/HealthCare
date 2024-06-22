import { FaUserDoctor } from "react-icons/fa6";
import { MdEmail, MdOutlineWork } from "react-icons/md";
import { useLoaderData } from "react-router-dom";

const DoctorDetails = () => {
  const singleDoctor = useLoaderData();
  const { doctorName, doctorEmail, imageURL, workingDay, details, expertise } = singleDoctor;

  return (
    <section className="bg-gray-100 text-gray-800 py-10">
      <div className="container max-w-6xl mx-auto p-6 space-y-8">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden lg:flex">
          <div className="lg:w-1/2">
            <img src={imageURL} alt="" className=" w-full h-84 rounded sm:h-96 lg:col-span-7 dark:bg-gray-500" />
          </div>
          <div className="p-10 lg:w-1/2">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">{doctorName}</h2>
            <p className="text-xl text-gray-600 flex items-center mb-4">
              <FaUserDoctor className="text-[#559797] mr-2" /> {expertise}
            </p>
            <p className="text-xl text-gray-600 flex items-center mb-4">
              <MdOutlineWork className="text-[#559797] mr-2" /> {workingDay}
            </p>
            <p className="text-xl text-gray-600 flex items-center mb-4">
              <MdEmail className="text-[#559797] mr-2" /> {doctorEmail}
            </p>
            <p className="text-gray-700 font-montserrat">{details}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DoctorDetails;
