import Header from "../components/Header";
import ProductDetail from "../components/ProductDetail";
import Footer from "../components/Footer";

import "bootstrap/dist/css/bootstrap.min.css";

function DetailPage() {
  return (
    <>
      <div className="DetailPageMain">
        <div className="DetailPageInner">
          <Header />
          <ProductDetail />
          <Footer />
        </div>
      </div>
    </>
  );
}

export default DetailPage;
