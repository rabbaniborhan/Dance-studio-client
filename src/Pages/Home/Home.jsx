import { Helmet } from "react-helmet-async";
import Banner from "../../components/Banner/Banner";
import Container from "../../components/Shared/Container";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Home | Dance Studio</title>
      </Helmet>

      <Banner></Banner>
      <Container></Container>
    </div>
  );
};

export default Home;
