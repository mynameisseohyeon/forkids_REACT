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

          <div className="ProductMiddle">
            {/* 제품에 대한 설명 */}
            <img src="images/decorating/toys17.png" />
            <span>
              의사는 아이에게 익숙한 직업 중 하나이므로, 놀이의 소재가되는
              경우도 많네요. 청진기를 사용하는 모습에 동경한 적이 있는 사람도
              많은 것이 아닐까요? 친밀한 어른의 모방 놀이를 즐기는, 닥터 세트를
              소개합니다.
            </span>
            <img src="images/decorating/toys18.png" />
            <span>
              텔레비전이나 실생활에서도 잘 보는, 기본적인 의료 기구 5 개(
              청진기, 혈압계, 타건기, 체온계, 주사기)와 운반용의 가방이 세트가
              되어 있습니다. 언제 어디서나 환자에게 달려갑니다.
            </span>
            <img src="images/decorating/toys19.png" />
            <span>
              언제나 진찰받고 있는 선생님의 모방을 해 몸의 사람이나 봉제인형을
              진찰! 혈압계는 펌프를 잡으면 소리가 울리는 구조가 붙어 있습니다.
              집의 사람이나 오늘, 친구와 함께 역할을 교체하면서 놀아도 즐겁네요.
              어른의 셔츠를 백의 대신으로 하거나, 소지한 채로 기구를 다른 의료
              기구에 봐서 사용하면, 점점 집안이 병원답게 되어 갑니다. 이것이라면
              병원 싫어하는 아이도, 놀이 놀이가 예행 연습이 되어 실제의 진찰을
              받아들이기 쉬워질지도 모르겠네요.
            </span>
          </div>

          <div className="ProductBottom">
            {/*  성분 및 반품 교한 배송에 대한 설명 */}
            <div>
              <span>상품명</span>
              <span> 닥터 세트</span>
              <span>메이커</span>
              <span> 플랜토이(태국)</span>
              <span>생산국</span>
              <span>태국</span>
              <span>소재</span>
              <span> 천연 나무 (고무 나무)</span>
              <span>사이즈 </span>
              <span> 2.4 x 16.0 x 51.6 cm</span>
              <span>무게</span>
              <span>총중량 248g</span>
              <span>내용</span>
              <span>가방, 청진기, 혈압계, 타건기, 체온계, 주사기 각 1 개</span>
              <span>대상 연령</span>
              <span>3세～</span>
              <span>주의사항</span>
              <span>
                천연 목재를 사용하고 있기 때문에, 나뭇결과 색감, 감촉 등 하나
                하나 개체 차이가 있습니다.
              </span>
            </div>

            <div>
              <span>교환 및 반품 안내</span>
            </div>
          </div>
          <div className="ProductRecommand">
            {/* 추천 상품 */}
            <span>같이 구매하면 좋은 상품</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductDetail;
