import img1 from '../assets/images/allergy.jpg'
import img2 from '../assets/images/mri.jpg'
import img3 from '../assets/images/family.jpg'
const Promotion = () => {
    return (
        <div className="max-w-7xl mx-auto p-4">
      <h2 className="text-2xl text-center mt-10 font-medium font-poppins mb-6">Promotional Offers</h2>
      
      <div className="bg-white shadow-md rounded-lg p-6 gap-5 mb-4 flex">
        <div className="w-1/3">
          <img src={img1} alt="Health Checkup" className="w-full rounded-lg shadow-md" />
        </div>
        <div className="w-2/3 ml-4">
          <h3 className="text-xl font-bold mb-2">Comprehensive Health Checkup</h3>
          <p className="text-gray-700 mb-4">Get a thorough health checkup at 20% off this month. Our package includes...</p>
          <p className="text-gray-600">Promo Code: <span className="font-bold">HEALTH2024</span></p>
        </div>
      </div>
      
      <div className="bg-white shadow-md rounded-lg p-6 mb-4 flex">
        <div className="w-1/3">
          <img src={img2} alt="Specialized Tests" className="w-full rounded-lg shadow-md" />
        </div>
        <div className="w-2/3 ml-4">
          <h3 className="text-xl font-bold mb-2">Specialized Tests Discount</h3>
          <p className="text-gray-700 mb-4">Avail discounts on specialized tests like MRI, CT scan, and more. Limited time offer!</p>
          <p className="text-gray-600">Valid until: <span className="font-bold">June 30, 2024</span></p>
        </div>
      </div>
      
      <div className="bg-white shadow-md rounded-lg p-6 mb-4 flex">
        <div className="w-1/3">
          <img src={img3} alt="Family Health Package" className="w-full rounded-lg shadow-md" />
        </div>
        <div className="w-2/3 ml-4">
          <h3 className="text-xl font-bold mb-2">Family Health Package</h3>
          <p className="text-gray-700 mb-4">Bring your family for a health checkup and save 30% on total costs.</p>
          <p className="text-gray-600">For families of 4 or more</p>
        </div>
      </div>
    </div>
    );
};

export default Promotion;