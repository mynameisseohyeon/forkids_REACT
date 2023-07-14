import Header from "../components/Header";
import Banner from "../components/Banner";
import Categories from "../components/Categories";
import Footer from "../components/Footer";

import "bootstrap/dist/css/bootstrap.min.css";

function HomePage() {
  return (
    <>
      <div className="StoreMain">
        <div className="StoreInner">
          <Header />
          <Banner />
          <Categories />
          <Footer />
        </div>
      </div>
    </>
  );
}

export default HomePage;
