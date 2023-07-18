import Categories from "../components/Categories";
import Review from "../components/Review";

import "bootstrap/dist/css/bootstrap.min.css";

function StorePage() {
  return (
    <>
      <div className="StoreMain">
        <div className="StoreInner">
          <img
            src="images/decorating/background8.png"
            style={{
              top: 1570,
              right: 415,
              objectFit: "contain",
              position: "absolute",
              width: 430,
            }}
          />
          <Categories />
          <Review />
        </div>
      </div>
    </>
  );
}

export default StorePage;
