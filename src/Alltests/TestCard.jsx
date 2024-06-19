import { LuCalendarCheck } from "react-icons/lu";
import { Link } from "react-router-dom";

const TestCard = ({test}) => {
    const {testName, image, description, date} = test;
    return (
        <div className="max-w-xs rounded-md shadow-md dark:bg-gray-50 dark:text-gray-800">
            <img src={image} alt="" className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500" />
            <div className="flex flex-col justify-between p-6 space-y-8">
                <div className="space-y-2 h-[200px] md:h-[210px] lg:h-[200px]">
                    <h2 className="text-2xl text-center font-roboto font-semibold tracking-wide hover:text-[#24bca3]">{testName}</h2>
                    <p className="dark:text-gray-800 text-center">{description}</p>
                    <p className="font-poppins pt-4 text-lg"><LuCalendarCheck className="inline text-2xl" /> {date}</p>
                </div>
                <Link to={`/details/${test._id}`}><button type="button" className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md dark:bg-[#559797] dark:text-gray-50">Read more</button></Link>
            </div>
        </div>
    );
};

export default TestCard;
