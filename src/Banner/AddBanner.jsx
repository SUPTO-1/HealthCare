import Swal from 'sweetalert2';
import bannerImg from '../assets/images/addbanner.jpg';
import UseAxiosSecure from '../CustomHook/UseAxiosSecure';

const AddBanner = () => {
  const axiosSecure = UseAxiosSecure();
  const handleAdd = (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const heading = form.get("heading");
    const subHeading = form.get("subHeading");
    const image = form.get("bannerURL");
    const addBanner = {
      heading,
      subHeading,
      image,
    };
    console.log(addBanner);
    axiosSecure.post('/banner', addBanner)
      .then(res => {
        if (res.data.insertedId) {
          Swal.fire({
            title: "Success!",
            text: "Banner added successfully",
            icon: "success",
            confirmButtonText: "Okay",
          });
          e.target.reset();
        }
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#559797] px-0 py-0 md:px-0 md:py-0 lg:px-8 lg:py-12">
      <div className="flex flex-col md:flex-row bg-gray-100 md:rounded-lg shadow-lg overflow-hidden w-full max-w-5xl">
        <div className="md:w-1/2 md:block">
          <img 
            src={bannerImg} 
            alt="Banner" 
            className="object-cover w-full h-full"
          />
        </div>
        <div className="w-full md:w-1/2 p-6 md:p-10 lg:p-20">
          <h2 className="text-xl md:text-3xl font-semibold font-poppins mb-8 text-gray-800">Add Banner</h2>
          <form onSubmit={handleAdd}>
            <div className="space-y-6">
              <div>
                <label className="block text-lg font-medium text-gray-700 mb-2">Heading</label>
                <input
                  type="text"
                  placeholder="Enter Heading"
                  className="input block w-full px-3 py-2 lg:px-4 lg:py-3 border border-gray-300 rounded-md text-base focus:outline-none"
                  name="heading"
                  required
                />
              </div>
              <div>
                <label className="block text-lg font-medium text-gray-700 mb-2">Sub-Heading</label>
                <input
                  type="text"
                  placeholder="Enter Sub-Heading"
                  className="input block w-full px-3 py-2 lg:px-4 lg:py-3 border border-gray-300 rounded-md text-base focus:outline-none"
                  name="subHeading"
                  required
                />
              </div>
              <div>
                <label className="block text-lg font-medium text-gray-700 mb-2">Banner URL</label>
                <input
                  type="text"
                  placeholder="Banner URL"
                  className="input block w-full px-3 py-2 lg:px-4 lg:py-3 border border-gray-300 rounded-md text-base focus:outline-none"
                  name="bannerURL"
                  required
                />
              </div>
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

export default AddBanner;
