// import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import Contents from "./components/Contents";
import Partners from "./components/Partners";
import Introduce from "./components/Introduce";
import Banner from "./components/Banner";
import Events from "./components/Events";
import Footer from "./components/Footer";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
      <div className="Main">
        <div className="inner">
          <Header />
          <Contents />
          <Partners />
          <Introduce />
          <Banner />
          <Events />
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
