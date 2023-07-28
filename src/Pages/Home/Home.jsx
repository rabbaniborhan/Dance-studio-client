import { Helmet } from "react-helmet-async";
import Banner from "../../components/Banner/Banner";
import PopularClass from "./PopularClass/PopularClass";
import PopularInstructor from "./PopularInstructor/PopularInstructor";
import About from "./AboutUs/About";
import OurDetails from "../../components/OurDetails/OurDetails";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title> Dance Studio | Home </title>
      </Helmet>
      <Banner></Banner>
      <OurDetails></OurDetails>
      <PopularClass></PopularClass>
      <PopularInstructor></PopularInstructor>
      <About></About>
    </div>
  );
};

export default Home;
