import Banner from "../components/Banner";
import Categories from "../components/Categories";

import "bootstrap/dist/css/bootstrap.min.css";

function StorePage() {
  return (
    <>
      <div className="StoreMain">
        <div className="StoreInner">
          <Banner />
          <Categories />
        </div>
      </div>
    </>
  );
}

export default StorePage;
