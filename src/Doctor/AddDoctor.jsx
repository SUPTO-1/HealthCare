import Swal from "sweetalert2";
import UseAxiosSecure from "../CustomHook/UseAxiosSecure";
import addTestImg from "../assets/images/doctorBanner.jpg";
const AddDoctor = () => {
  const axiosSecure = UseAxiosSecure();
  const handleAddDoctor = (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const doctorName = form.get("doctorName");
    const doctorEmail = form.get("doctorEmail");
    const imageURL = form.get("imageURL");
    const workingDay = form.get("workingDay");
    const expertise = form.get("expertise");
    const details = form.get("details");
    const addDoctor = {
      doctorName,
      doctorEmail,
      imageURL,
      workingDay,
      expertise,
      details,
    };
    axiosSecure.post("/doctor", addDoctor).then((res) => {
      if (res.data.insertedId) {
        Swal.fire({
          title: "Success!",
          text: "Doctor added successfully",
          icon: "success",
          confirmButtonText: "Okay",
        });
        e.target.reset();
      }
    });
  };
  return (
    <div className=" md:mx-8 font-roboto lg:mt-10 lg:flex  gap-5 p-0 md:4 lg:p-0">
      <div className="flex-1 hidden lg:block md:rounded-r-[150px] rounded-r-lg ">
        <img src={addTestImg} className="object-cover w-full h-full" alt="" />
      </div>
      <div className="flex-1 px-2 md:px-16 lg:pb-10 pt-0">
        <h2 className="text-xl md:text-3xl text-center text-[#80B9AD] font-poppins md:pt-2 lg:mt-0 font-bold">
          Add Doctor
        </h2>
        <form onSubmit={handleAddDoctor}>
          <div className="space-y-6">
            <div>
              <label className="block text-lg font-medium text-gray-700 mb-2">
                Doctor Name
              </label>
              <input
                type="text"
                placeholder="Enter Doctor Name"
                className="input block w-full px-2 py-2 lg:px-4 lg:py-3 border border-gray-300 rounded-md text-base focus:outline-none"
                name="doctorName"
                required
              />
            </div>
            <div>
              <label className="block text-lg font-medium text-gray-700 mb-2">
                Doctor Email
              </label>
              <input
                type="email"
                placeholder="Enter Email"
                className="input block w-full px-2 py-2 lg:px-4 lg:py-3 border border-gray-300 rounded-md text-base focus:outline-none"
                name="doctorEmail"
                required
              />
            </div>
            <div>
              <label className="block text-lg font-medium text-gray-700 mb-2">
                Image URL
              </label>
              <input
                type="text"
                placeholder="Image URL"
                className="input block w-full px-2 py-2 lg:px-4 lg:py-3 border border-gray-300 rounded-md text-base focus:outline-none"
                name="imageURL"
                required
              />
            </div>
            <div className="">
              <div className="">
                <label className="block text-lg font-medium text-gray-700 mb-2">
                  Expertise
                </label>
                <input
                  type="text"
                  placeholder="Expertise"
                  className="input block w-full px-2 py-2 lg:px-4 lg:py-3 border border-gray-300 rounded-md text-base focus:outline-none"
                  name="expertise"
                  required
                />
              </div>
            </div>
            <div className="">
              <div className="">
                <label className="block text-lg font-medium text-gray-700 mb-2">
                  Working Day
                </label>
                <input
                  type="text"
                  placeholder="Working Day"
                  className="input block w-full px-2 py-2 lg:px-4 lg:py-3 border border-gray-300 rounded-md text-base focus:outline-none"
                  name="workingDay"
                  required
                />
              </div>
            </div>
            <label className="form-control">
              <div className="label">
                <span className="block text-lg font-medium text-gray-700 mb-2">
                  Details
                </span>
              </div>
              <textarea
                className="textarea textarea-bordered h-24 text-base focus:outline-none"
                name="details"
                placeholder="Details"
              ></textarea>
            </label>
            <div className="mt-8">
              <button
                type="submit"
                className="w-full py-3 lg:py-4 bg-[#559797] text-white font-semibold rounded-md shadow-md hover:bg-[#4a8383]"
              >
                Add Doctor
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddDoctor;
