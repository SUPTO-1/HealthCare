import { useLoaderData } from "react-router-dom";

const SingleUser = () => {
  const singleUser = useLoaderData();
  const { name, email, photo, district, upazila, bloodGroup } = singleUser;

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-6">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden max-w-4xl w-full flex flex-col md:flex-row min-h-[500px]">
        <div className="flex-1 bg-gray-200 p-8 flex items-center justify-center">
          <img src={photo} alt={name} className="rounded-full w-48 h-48 object-cover" />
        </div>
        <div className="flex-1 p-8 flex flex-col justify-center">
          <h1 className="text-3xl font-poppins font-bold text-gray-800 mb-4">{name}</h1>
          <div className="text-lg text-gray-600 font-poppins mb-2">
            <span className="font-semibold font-poppins">Email: </span>{email}
          </div>
          <div className="text-lg text-gray-600 mb-2 font-poppins">
            <span className="font-semibold font-poppins">Blood Group: </span>{bloodGroup}
          </div>
          <div className="text-lg text-gray-600 mb-2 font-poppins">
            <span className="font-poppins font-semibold">District: </span>{district}
          </div>
          <div className="text-lg text-gray-600 font-poppins">
            <span className="font-poppins font-semibold">Upazila: </span>{upazila}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleUser;
