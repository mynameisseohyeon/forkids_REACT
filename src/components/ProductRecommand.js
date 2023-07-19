import "../css/ProductRecommand.css";

function ProductRecommand() {
  return (
    <>
      <div className="ProductRecommandMain">
        <div className="ProductRecommandInner">
          <div className="ProductRecommand">
            {/* 추천 상품 */}
            <h3>함께 구매하면 좋은 상품</h3>
            <div className="ProductRec">
              <img src="images/decorating/toys11.png" />
              <span>제품 제목</span>
            </div>
            <div
              className="ProductRec"
              style={{ marginRight: 20, marginLeft: 20 }}
            >
              <img src="images/decorating/toys12.png" />
              <span>제품 제목</span>
            </div>
            <div className="ProductRec">
              <img src="images/decorating/toys13.png" />
              <span>제품 제목</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductRecommand;
