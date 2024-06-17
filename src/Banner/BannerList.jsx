import { useQuery } from "@tanstack/react-query";
import UseAxiosSecure from "../CustomHook/UseAxiosSecure";

const BannerList = () => {
    const axiosSecure = UseAxiosSecure();
    const {data: banner = []} = useQuery({
        queryKey:['banner'],
        queryFn: async()=>{
            const res = await axiosSecure.get('/banner');
            return res.data;
        }
    })
    return (
        <div className="min-h-screen">
            <h2 className="text-2xl font-roboto text-center mt-10">All Available Banners: {banner.length} </h2>
        </div>
    );
};

export default BannerList;