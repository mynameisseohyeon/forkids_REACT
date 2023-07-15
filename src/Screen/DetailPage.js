import ProductDetail from "../components/ProductDetail";

import "bootstrap/dist/css/bootstrap.min.css";

function DetailPage() {
  return (
    <>
      <div className="DetailPageMain">
        <div className="DetailPageInner">
          <ProductDetail />
        </div>
      </div>
    </>
  );
}

export default DetailPage;
