import Contents from "../components/Contents";
import Partners from "../components/Partners";
import Categories from "../components/Categories";
import Introduce from "../components/Introduce";
import Events from "../components/Events";

import "bootstrap/dist/css/bootstrap.min.css";

function HomePage() {
  return (
    <>
      <div className="Main">
        <div className="inner">
          <img
            src="images/decorating/background1.png"
            style={{
              top: 370,
              right: 170,
              objectFit: "contain",
              position: "absolute",
            }}
          />
          <img
            src="images/decorating/background2.png"
            style={{
              top: 370,
              left: 170,
              objectFit: "contain",
              position: "absolute",
            }}
          />
          <img
            src="images/decorating/background3.png"
            style={{
              top: 1900,
              right: 150,
              objectFit: "contain",
              position: "absolute",
            }}
          />
          <img
            src="images/decorating/background6.png"
            style={{
              top: 3100,
              left: 150,
              objectFit: "contain",
              position: "absolute",
            }}
          />
          <img
            src="images/decorating/background7.png"
            style={{
              top: 4400,
              right: 250,
              objectFit: "contain",
              position: "absolute",
              width: "16%",
            }}
          />
          <img
            src="images/decorating/background4.png"
            style={{
              top: 5000,
              right: 200,
              objectFit: "contain",
              position: "absolute",
            }}
          />

          <Contents />
          <Partners />
          <Categories />
          <Introduce />
          <Events />
        </div>
      </div>
    </>
  );
}

export default HomePage;
