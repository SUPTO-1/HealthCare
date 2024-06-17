import UseAxiosSecure from "../CustomHook/UseAxiosSecure";

const BannerList = () => {
    const axiosSecure = UseAxiosSecure();
    return (
        <div className="min-h-screen">
            <h2 className="text-2xl font-roboto text-center mt-10">All Available Banners</h2>
        </div>
    );
};

export default BannerList;