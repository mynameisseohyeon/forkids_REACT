import "../css/ProductRecommand.css";

function ProductRecommand() {
  return (
    <>
      <div className="ProductRecommandMain">
        <div className="ProductRecommandInner">
          <div className="ProductRecommand">
            {/* Recommended Products */}
            <h3>Recommended Products to Buy Together</h3>
            <div className="ProductRec">
              <img src="images/decorating/toys11.png" />
              <span>Product Name</span>
            </div>
            <div
              className="ProductRec"
              style={{ marginRight: 20, marginLeft: 20 }}
            >
              <img src="images/decorating/toys12.png" />
              <span>Product Name</span>
            </div>
            <div className="ProductRec">
              <img src="images/decorating/toys13.png" />
              <span>Product Name</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductRecommand;
