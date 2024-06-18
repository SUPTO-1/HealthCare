import DatePicker from "react-datepicker";
import addTestImg from "../assets/images/addTest.jpg";
import { useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import UseAxiosSecure from "../CustomHook/UseAxiosSecure";
import Swal from "sweetalert2";
const AddTest = () => {
  const [startDate, setStartDate] = useState(new Date());
  const axiosSecure = UseAxiosSecure();
  const handleAdd = (e) =>{
    e.preventDefault();
    const form = new FormData(e.target);
    const testName = form.get('testName');
    const testFee = form.get('testFee');
    const description = form.get('description');
    const slot = form.get('slot');
    const date = form.get('date');
    const image = form.get('imageURL');
    const addTest = {
        testName,
        testFee,
        description,
        slot,
        date,
        image
    }
    //console.log(addTest);
    axiosSecure.post('/test',addTest)
    .then(res=>{
        if(res.data.insertedId)
            {
                Swal.fire({
                    title: "Success!",
                    text: "Test added successfully",
                    icon: "success",
                    confirmButtonText: "Okay",
                  });
                  e.target.reset();
            }
    })
   
  }
  return (
    <div className=" md:mx-8 font-roboto lg:mt-10 lg:flex  gap-5 p-0 md:4 lg:p-0">
      <div className="flex-1 hidden lg:block md:rounded-r-[150px] rounded-r-lg ">
        <img src={addTestImg} className="object-cover w-full h-full" alt="" />
      </div>
      <div className="flex-1 px-2 md:px-16 lg:pb-10 pt-0">
        <h2 className="text-xl md:text-3xl text-center text-[#80B9AD] font-poppins md:pt-2 lg:mt-0 font-bold">
          Add Test
        </h2>
        <form onSubmit={handleAdd}>
          <div className="space-y-6">
            <div>
              <label className="block text-lg font-medium text-gray-700 mb-2">
                Test Name
              </label>
              <input
                type="text"
                placeholder="Enter Test Name"
                className="input block w-full px-2 py-2 lg:px-4 lg:py-3 border border-gray-300 rounded-md text-base focus:outline-none"
                name="testName"
                required
              />
            </div>
            <div>
              <label className="block text-lg font-medium text-gray-700 mb-2">
                Test Fee
              </label>
              <input
                type="number"
                placeholder="Enter Test Fee"
                className="input block w-full px-2 py-2 lg:px-4 lg:py-3 border border-gray-300 rounded-md text-base focus:outline-none"
                name="testFee"
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
                  Slot
                </label>
                <input
                  type="text"
                  placeholder="Slot"
                  className="input block w-full px-2 py-2 lg:px-4 lg:py-3 border border-gray-300 rounded-md text-base focus:outline-none"
                  name="slot"
                  required
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
                  onChange={(date) => setStartDate(date)}
                />
              </div>
            </div>
            <label className="form-control">
              <div className="label">
                <span className="label-text">Description</span>
              </div>
              <textarea
                className="textarea textarea-bordered h-24 text-base focus:outline-none"
                name="description"
                placeholder="Description"
              ></textarea>
            </label>
            <div className="mt-8">
              <button
                type="submit"
                className="w-full py-3 lg:py-4 bg-[#559797] text-white font-semibold rounded-md shadow-md hover:bg-[#4a8383]"
              >
                Add Test
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddTest;
