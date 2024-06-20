import Swal from "sweetalert2";
import UseAxiosSecure from "../CustomHook/UseAxiosSecure";
import addTestImg from "../assets/images/addTest.jpg";
const Recommendation = () => {
    const axiosSecure = UseAxiosSecure();
  const handleAdd = (e) =>{
    e.preventDefault();
    const form = new FormData(e.target);
    const headline = form.get('headline');
    const recommendation = form.get('recommendation');
    const image = form.get('imageURL');
    const authorName = form.get('authorName');
    const addRecommendation = {
        authorName,
        headline,
        recommendation,
        image
    }
    //console.log(addTest);
    axiosSecure.post('/recommendation',addRecommendation)
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
        <h2 className="text-xl md:text-2xl mb-6 text-center text-[#80B9AD] font-poppins md:pt-2 lg:mt-0 font-bold">
          Add Recommendation
        </h2>
        <form onSubmit={handleAdd}>
          <div className="space-y-6">
            <div>
              <label className="block text-lg font-medium text-gray-700 mb-2">
                Author Name
              </label>
              <input
                type="text"
                placeholder="Name Of The Author"
                className="input block w-full px-2 py-2 lg:px-4 lg:py-3 border border-gray-300 rounded-md text-base focus:outline-none"
                name="authorName"
                required
              />
            </div>
            <div>
              <label className="block text-lg font-medium text-gray-700 mb-2">
                Headline
              </label>
              <input
                type="text"
                placeholder="Enter Headline"
                className="input block w-full px-2 py-2 lg:px-4 lg:py-3 border border-gray-300 rounded-md text-base focus:outline-none"
                name="headline"
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
            <label className="form-control">
              <div className="label">
                <span className="block text-lg font-medium text-gray-700 mb-2">Recommendation</span>
              </div>
              <textarea
                className="textarea textarea-bordered h-24 text-base focus:outline-none"
                name="Recommendation"
                placeholder="Recommendation"
              ></textarea>
            </label>
            <div className="mt-8">
              <button
                type="submit"
                className="w-full py-3 lg:py-4 bg-[#559797] text-white font-semibold rounded-md shadow-md hover:bg-[#4a8383]"
              >
                Add Recommendation
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
    );
};

export default Recommendation;