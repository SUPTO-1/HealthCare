import { Link } from "react-router-dom";

const DoctorCard = ({singleDoctor}) => {
    const {doctorName , imageURL , workingDay , details , expertise} = singleDoctor;
    return (
        <div className="max-w-xs rounded-md shadow-md dark:bg-gray-50 dark:text-gray-800">
            <img src={imageURL} alt="" className="object-cover object-center w-full rounded-t-md h-84 dark:bg-gray-500" />
            <div className="flex flex-col justify-between p-6 space-y-8">
                <div className="space-y-2">
                    <h2 className="text-2xl text-center font-roboto font-semibold tracking-wide hover:text-[#24bca3]">{doctorName}</h2>
                    <p className="dark:text-gray-800 font-medium text-center">{expertise}</p>
                </div>
                <Link><button type="button" className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md dark:bg-[#559797] dark:text-gray-50">Details</button></Link>
            </div>
        </div>
    );
};

export default DoctorCard;