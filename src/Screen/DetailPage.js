import ProductDetail from "../components/ProductDetail";
import ProductRecommand from "../components/ProductRecommand";
import "bootstrap/dist/css/bootstrap.min.css";

function DetailPage() {
  return (
    <>
      <div className="DetailPageMain">
        <div className="DetailPageInner">
          <ProductDetail />
          <ProductRecommand />
        </div>
      </div>
    </>
  );
}

export default DetailPage;
