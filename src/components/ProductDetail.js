import "../css/ProductDetail.css";
import { Stack, Button, Image } from "react-bootstrap";
import React, { useState } from "react";

function ProductDetail() {
  return (
    <>
      <div className="ProductDetailMain">
        <div className="ProductDetailInner">
          <div className="ProducTop">
            <img src="images/decorating/toys16.png" />
            <div className="ProducTopInt">
              <h2>의사 체험 놀이 세트</h2>
              <span>가격</span>
              <span>수량</span>
              <button>장바구니</button>
              <button>바로구매</button>
            </div>
          </div>

          <div className="ProductMiddle">{/* 제품에 대한 설명 */}</div>
          <div className="ProductBottom">
            {/*  성분 및 반품 교한 배송에 대한 설명 */}
          </div>
          <div className="ProductRecommand">{/* 추천 상품 */}</div>
        </div>
      </div>
    </>
  );
}

export default ProductDetail;
