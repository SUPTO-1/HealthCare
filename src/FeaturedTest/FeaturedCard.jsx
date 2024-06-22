const FeaturedCard = ({singleFeature}) => {
    const {testName , image , count} = singleFeature;
    return (
        <div className="max-w-xs rounded-md shadow-md dark:bg-gray-50 dark:text-gray-800">
            <img src={image} alt="" className="object-cover object-center w-full rounded-t-md h-84 dark:bg-gray-500" />
            <div className="flex flex-col justify-between p-6 space-y-8">
                <div className="space-y-2">
                    <h2 className="text-2xl text-center font-roboto font-semibold tracking-wide hover:text-[#24bca3]">{testName}</h2>
                    <p className="dark:text-gray-800 font-medium text-lg text-center mt-4">Total Booked: {count}</p>
                </div>
            </div>
        </div>
    );
};

export default FeaturedCard;