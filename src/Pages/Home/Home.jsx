import { Helmet } from "react-helmet-async";
import Banner from "../../components/Banner/Banner";
import PopularClass from "./PopularClass/PopularClass";
import PopularInstructor from "./PopularInstructor/PopularInstructor";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Home | Dance Studio</title>
      </Helmet>
      <Banner></Banner>
      <PopularClass></PopularClass>
      <PopularInstructor></PopularInstructor>
    </div>
  );
};

export default Home;
