import ProductDetail from "../components/ProductDetail";
import ProductGuid from "../components/ProductGuid";
import ProductRecommand from "../components/ProductRecommand";
import "bootstrap/dist/css/bootstrap.min.css";

function DetailPage() {
  return (
    <>
      <div className="DetailPageMain">
        <div className="DetailPageInner">
          <ProductDetail />
          <ProductGuid />
          <ProductRecommand />
        </div>
      </div>
    </>
  );
}

export default DetailPage;
