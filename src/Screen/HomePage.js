import Header from "../components/Header";
import Contents from "../components/Contents";
import Partners from "../components/Partners";
import Banner from "../components/Banner";
import Introduce from "../components/Introduce";
import Events from "../components/Events";
import Footer from "../components/Footer";

import "bootstrap/dist/css/bootstrap.min.css";

function HomePage() {
  return (
    <>
      <div className="Main">
        <div className="inner">
          <Header />
          <Contents />
          <Partners />
          <Banner />
          <Introduce />
          <Events />
          <Footer />
        </div>
      </div>
    </>
  );
}

export default HomePage;
