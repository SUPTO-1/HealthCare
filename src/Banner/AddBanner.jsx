import Swal from 'sweetalert2';
import bannerImg from '../assets/images/addbanner.jpg';

const AddBanner = () => {
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
    }
    console.log(addBanner);
    fetch('http://localhost:5000/banner',{
      method:'POST',
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify(addBanner)
    })
    .then(res=>res.json())
    .then(data=>{
      console.log(data);
      if(data.insertedId)
        {
          Swal.fire({
            title: 'success!',
            text: 'Volunteer post added successfully',
            icon: 'success',
            confirmButtonText: 'Okay'
          })
        }
    })
  }
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#559797] md:px-4 md:py-8">
      <div className="md:flex flex-col md:flex-row bg-gray-100 md:rounded-lg shadow-lg overflow-hidden w-full max-w-5xl">
        <div className="md:w-1/2 md:block">
          <img 
            src={bannerImg} 
            alt="Banner" 
            className="object-cover w-full h-full"
          />
        </div>
        <div className="w-full md:w-1/2 p-6 md:p-20">
          <h2 className="text-xl md:text-3xl font-semibold font-poppins mb-8 text-gray-800">Add Banner</h2>
          <form onSubmit={handleAdd}>
          <div className="space-y-6">
            <div>
              <label className="block text-lg font-medium text-gray-700 mb-2">Heading</label>
              <input
                type="text"
                placeholder="Enter Heading"
                className="input block w-full md:px-4 md:py-3 border border-gray-300 rounded-md text-base focus:outline-none"
                name="heading"
                required
              />
            </div>
            <div>
              <label className="block text-lg font-medium text-gray-700 mb-2">Sub-Heading</label>
              <input
                type="text"
                placeholder="Enter Sub-Heading"
                className="input block w-full md:px-4 md:py-3 border border-gray-300 rounded-md text-base focus:outline-none "
                name="subHeading"
                required
              />
            </div>
            <div>
              <label className="block text-lg font-medium text-gray-700 mb-2">Banner URL</label>
              <input
                type="text"
                placeholder="Banner URL"
                className="input block w-full md:px-4 md:py-3 border border-gray-300 rounded-md text-base focus:outline-none "
                name="bannerURL"
                required
              />
            </div>
            <div className="mt-8">
              <button
                type="submit"
                className="w-full md:py-4 bg-[#559797] text-white font-semibold rounded-md shadow-md hover:bg-[#4a8383] "
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
