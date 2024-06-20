import { useQuery } from '@tanstack/react-query';
import UseAxiosPublic from '../CustomHook/UseAxiosPublic';
import RecommendationCard from './RecommendationCard';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const RecommendationSlide = () => {
  const axiosPublic = UseAxiosPublic();
  const { data: recommendation = []} = useQuery({
    queryKey: ['recommendation'],
    queryFn: async () => {
      const res = await axiosPublic.get('/recommendation');
      return res.data;
    },
  });

  return (
    <div className="lg:px-44 py-20">
      <h2 className="text-2xl text-[#363433] font-medium font-poppins text-center mt-10 mb-16">
        Our Recommendations
      </h2>
      <Swiper
        modules={[Navigation, Autoplay, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={1}  // Show only one slide per view
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        navigation
        pagination={{ clickable: true }}
        className="recommendation-swiper"
      >
        {recommendation.map((recommended) => (
          <SwiperSlide key={recommended._id}>
            <RecommendationCard recommended={recommended} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default RecommendationSlide;
