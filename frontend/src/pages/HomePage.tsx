import Arrivals from "../components/Home/Arrivals";
import Brands from "../components/Home/Brands";
import Preview from "../components/Home/Preview";
import DressStyle from "../components/Home/DressStyle";
import HappyCustomers from "../components/Home/HappyCustomers";

const HomePage = () => {
  return (
    <>
      <Preview />
      <Brands />
      <Arrivals title={"new arrivals"} count={4} border={true} />
      <Arrivals title={"top selling"} count={2} border={false} />
      <DressStyle />
      <HappyCustomers />
    </>
  );
};

export default HomePage;
