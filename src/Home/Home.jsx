import Banner from "../Banner/Banner";
import FeaturedTest from "../FeaturedTest/FeaturedTest";
import RecommendationSlide from "../Recommendation/RecommendationSlide";
import Promotion from "./Promotion";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <FeaturedTest></FeaturedTest>
            <Promotion></Promotion>
            <RecommendationSlide></RecommendationSlide>
        </div>
    );
};

export default Home;