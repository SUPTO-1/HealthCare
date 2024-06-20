import { IoMdCheckmark } from "react-icons/io";

const RecommendationCard = ({ recommended }) => {
  const { authorName, image,headline,recommendation } = recommended;
  return (
    <div className="md:flex gap-4 lg:gap-10">
      <div className="w-full md:w-2/3 lg:w-2/4 md:h-[700px]">
      <img src={image} className="rounded-lg shadow-2xl object-cover " />
      </div>
      <div className="mt-5 md:mt-5 w-full md:w-2/3 lg:w-2/4 px-4 md:px-0">
        <h3 className="text-xl lg:text-3xl font-medium font-poppins text-[#031b4e]">{headline}</h3>
        <div className="flex justify-between mt-5 text-[#031b4e]">
        <p className="text-sm lg:text-lg font-poppins mt-2">{authorName}</p>
        <p className="text-sm md:text-lg font-poppins mt-2">21-02-23</p>
        </div>
        <hr className="mt-2 lg:mt-5" />
        <p className="text-sm lg:text-lg lg:pl-8 mt-2 lg:mt-5 font-semibold text-slate-700">{recommendation} </p>
        <div className="lg:pl-8">
            <h2 className="text-lg lg:text-3xl font-medium font-poppins text-[#031b4e] mt-10">Digital Operation</h2>
            <p className="text-sm lg:text-lg mt-2 lg:mt-5 font-semibold text-slate-700">Digital Opration is a technique used for thousands of years to develop awareness of the present moment, It can involve practices to sharpen focus and attention</p>
            <div className="mt-10 hidden md:flex justify-between">
                <div className="">
                    <p className="text-sm lg:text-lg mb-1 lg:mb-4 font-poppins"> <IoMdCheckmark className="inline ml-2 text-sm lg:text-xl  text-[#6e86b9]" /> Avoid ultra-processed foods</p>
                    <p className="text-sm lg:text-lg mb-1 lg:mb-4 font-poppins"> <IoMdCheckmark className="inline ml-2 text-sm lg:text-xl  text-[#6e86b9]" /> Don’t eat heavily meats</p>
                    <p className="text-sm lg:text-lg mb-1 lg:mb-4 font-poppins"> <IoMdCheckmark className="inline ml-2 text-sm lg:text-xl  text-[#6e86b9]" /> Minimize your sugar intake</p>
                </div>
                <div className="">
                    <p className="text-sm lg:text-lg mb-1 lg:mb-4 font-poppins"> <IoMdCheckmark className="inline ml-2 text-sm lg:text-xl text-[#6e86b9]" /> Avoid bright lights before sleep</p>
                    <p className="text-sm lg:text-lg mb-1 lg:mb-4 font-poppins"> <IoMdCheckmark className="inline ml-2 text-sm lg:text-xl  text-[#6e86b9]" /> Drink only safe water</p>
                    <p className="text-sm lg:text-lg mb-1 lg:mb-4 font-poppins"> <IoMdCheckmark className="inline ml-2 text-sm lg:text-xl  text-[#6e86b9]" /> Avoid harmful use of alcohol</p>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default RecommendationCard;
