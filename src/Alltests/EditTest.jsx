import { useState } from "react";
import DatePicker from "react-datepicker";
import { useLoaderData } from "react-router-dom";
import "react-datepicker/dist/react-datepicker.css";
import addTestImg from "../assets/images/addTest.jpg";
import UseAxiosSecure from "../CustomHook/UseAxiosSecure";
import Swal from "sweetalert2";
const EditTest = () => {
  const [startDate, setStartDate] = useState(new Date());
  const editTest = useLoaderData();
  const { testName, description, image, testFee, slot, date,_id } = editTest;
  const handleUpdate = async(e) => {
    e.preventDefault(e);
    const form = new FormData(e.target);
    const testName = form.get("testName");
    const testFee = form.get("testFee");
    const description = form.get("description");
    const slot = form.get("slot");
    const date = form.get("date");
    const image = form.get("imageURL");
    const updateTest = {
      testName,
      testFee,
      description,
      slot,
      date,
      image,
    };
    const axiosSecure = UseAxiosSecure();
    const updateRes = await axiosSecure.patch(`/test/${_id}`,updateTest);
    if(updateRes.data.modifiedCount > 0)
        {
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Updated successfully',
                showConfirmButton: false,
                timer: 1500
              })
        }
  };
  return (
    <div className=" md:mx-8 font-roboto lg:mt-10 lg:flex  gap-5 p-0 md:4 lg:p-0">
      <div className="flex-1 hidden lg:block md:rounded-r-[150px] rounded-r-lg ">
        <img src={addTestImg} className="object-cover w-full h-full" alt="" />
      </div>
      <div className="flex-1 px-2 md:px-16 lg:pb-10 pt-0">
        <h2 className="text-xl md:text-3xl text-center text-[#80B9AD] font-poppins md:pt-2 lg:mt-0 font-bold">
          Update Test Info
        </h2>
        <form onSubmit={handleUpdate}>
          <div className="space-y-6">
            <div>
              <label className="block text-lg font-medium text-gray-700 mb-2">
                New Name
              </label>
              <input
                type="text"
                defaultValue={testName}
                placeholder="Enter New Test Name"
                className="input block w-full px-2 py-2 lg:px-4 lg:py-3 border border-gray-300 rounded-md text-base focus:outline-none"
                name="testName"
              />
            </div>
            <div>
              <label className="block text-lg font-medium text-gray-700 mb-2">
                New Test Fee
              </label>
              <input
                type="number"
                defaultValue={testFee}
                placeholder="Enter New Test Fee"
                className="input block w-full px-2 py-2 lg:px-4 lg:py-3 border border-gray-300 rounded-md text-base focus:outline-none"
                name="testFee"
              />
            </div>
            <div>
              <label className="block text-lg font-medium text-gray-700 mb-2">
                New Image URL
              </label>
              <input
                type="text"
                defaultValue={image}
                placeholder="New Image URL"
                className="input block w-full px-2 py-2 lg:px-4 lg:py-3 border border-gray-300 rounded-md text-base focus:outline-none"
                name="imageURL"
              />
            </div>
            <div className="">
              <div className="">
                <label className="block text-lg font-medium text-gray-700 mb-2">
                  New Slot
                </label>
                <input
                  type="text"
                  defaultValue={slot}
                  placeholder="Slot"
                  className="input block w-full px-2 py-2 lg:px-4 lg:py-3 border border-gray-300 rounded-md text-base focus:outline-none"
                  name="slot"
                />
              </div>
              <div className="mt-4">
                <label className="block text-lg font-medium text-gray-700 mb-2">
                  Date
                </label>
                <DatePicker
                  name="date"
                  className="input block w-full px-2 py-2 lg:px-4 lg:py-3 border border-gray-300 rounded-md text-base focus:outline-none"
                  selected={startDate}
                  defaultValue={date}
                  onChange={(date) => setStartDate(date)}
                />
              </div>
            </div>
            <label className="form-control">
              <div className="label">
                <span className="label-text">New Description</span>
              </div>
              <textarea
                className="textarea textarea-bordered h-24 text-base focus:outline-none"
                name="description"
                defaultValue={description}
                placeholder="New Description"
              ></textarea>
            </label>
            <div className="mt-8">
              <button
                type="submit"
                className="w-full py-3 lg:py-4 bg-[#559797] text-white font-semibold rounded-md shadow-md hover:bg-[#4a8383]"
              >
                Update Test
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditTest;
