import { useNavigate, useParams } from "react-router-dom";
import bannerImg from "../assets/images/addbanner.jpg";
import UseAxiosSecure from "../CustomHook/UseAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";
const SubmitReport = () => {
    const {id} = useParams();
    const axiosSecure = UseAxiosSecure();
    const navigate = useNavigate();
    const { data: reserved = [] } = useQuery({
        queryKey: ["reservation", id],
        queryFn: async () => {
            const res = await axiosSecure.get(`/reservation/forResult/${id}`);
            return res.data;
        },
    });
    const handleAddReport = (e) => {
        e.preventDefault();
        const form = new FormData(e.target);
        const userName = form.get('userName');
        const email = form.get('email');
        const report = form.get('report');
        const image = form.get('image');
        const testName = form.get('testName');
        const addReport = {
            userName,
            email,
            report,
            image,
            testName,
        }
        console.log(addReport);
        axiosSecure.post('/result', addReport)
        .then(res=>{
            if(res.data.insertedId)
                {
                    Swal.fire({
                        title: "Success!",
                        text: "Report Submitted successfully",
                        icon: "success",
                        confirmButtonText: "Okay",
                      });
                      e.target.reset();
                }
                axiosSecure.delete(`/reservation/${reserved._id}`);
                navigate('/dashboard/allTestAdmin');
        })
    }
    return (
        <div className="min-h-screen flex items-center justify-center bg-[#559797] px-0 py-0 md:px-0 md:py-0 lg:px-8 lg:py-12">
      <div className="flex flex-col md:flex-row bg-gray-100 lg:rounded-lg shadow-lg overflow-hidden w-full max-w-7xl">
        <div className="md:w-1/2 hidden lg:block">
          <img
            src={bannerImg}
            alt="Banner"
            className="object-cover w-full h-full"
          />
        </div>
        <div className="w-full lg:w-1/2 p-6 md:p-10 lg:p-12">
          <h2 className="text-xl md:text-3xl font-semibold font-poppins mb-8 text-gray-800">
            Submit Report
          </h2>
          <form onSubmit={handleAddReport}>
            <div className="space-y-6">
              <div>
                <label className="block text-lg font-medium text-gray-700 mb-2">
                  User Name
                </label>
                <input
                  type="text"
                  defaultValue={reserved.name}
                  placeholder="Enter Name"
                  className="input block w-full px-2 py-2 lg:px-4 lg:py-3 border border-gray-300 rounded-md text-base focus:outline-none"
                  name="userName"
                  readOnly
                  required
                />
              </div>
              <div>
                <label className="block text-lg font-medium text-gray-700 mb-2">
                  User Email
                </label>
                <input
                  type="text"
                  defaultValue={reserved.email}
                  placeholder="Enter Email"
                  className="input block w-full px-2 py-2 lg:px-4 lg:py-3 border border-gray-300 rounded-md text-base focus:outline-none"
                  name="email"
                  readOnly
                  required
                />
              </div>
              <div>
                <label className="block text-lg font-medium text-gray-700 mb-2">
                  Test Image
                </label>
                <input
                  type="text"
                  defaultValue={reserved.image}
                  placeholder="Enter Test Image"
                  className="input block w-full px-2 py-2 lg:px-4 lg:py-3 border border-gray-300 rounded-md text-base focus:outline-none"
                  name="image"
                  readOnly
                  required
                />
              </div>
              <div>
                <label className="block text-lg font-medium text-gray-700 mb-2">
                  Test Name
                </label>
                <input
                  type="text"
                  placeholder="Enter Test Name"
                  defaultValue={reserved.testName}
                  className="input block w-full px-2 py-2 lg:px-4 lg:py-3 border border-gray-300 rounded-md text-base focus:outline-none"
                  name="testName"
                  readOnly
                  required
                />
              </div>
              <label className="form-control">
                <div className="label">
                  <span className="label-text">Report</span>
                </div>
                <textarea
                  className="textarea textarea-bordered h-24 text-base focus:outline-none"
                  name="report"
                  placeholder="Report Description"
                  required
                ></textarea>
              </label>
              <div className="mt-8">
                <button
                  type="submit"
                  className="w-full py-3 lg:py-4 bg-[#559797] text-white font-semibold rounded-md shadow-md hover:bg-[#4a8383]"
                >
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
    );
};

export default SubmitReport;