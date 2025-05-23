import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router";
import Offers from "./Home/Offers";
import ScrollToTop from "../app/hooks/ScrollToTop";

const Layout: React.FC = () => {
  return (
    <div className="wrapper">
      <ScrollToTop />
      <Header />
      <main className="main">
        <Outlet />
      </main>
      <Offers />
      <Footer />
    </div>
  );
};

export default Layout;
