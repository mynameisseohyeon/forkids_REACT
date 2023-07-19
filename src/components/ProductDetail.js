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
            <div className="ProductGuid">
              <h3>제품 안내</h3>
              <table style={{ margin: "0 auto" }}>
                <tr>
                  <td className="td1">상품명</td>
                  <td className="td2">닥터 세트</td>
                </tr>
                <tr>
                  <td className="td1">메이커</td>
                  <td className="td2">플랜토이(태국)</td>
                </tr>
                <tr>
                  <td className="td1">생산국</td>
                  <td className="td2">태국</td>
                </tr>
                <tr>
                  <td className="td1">소재</td>
                  <td className="td2">천연 나무 (고무 나무)</td>
                </tr>
                <tr>
                  <td className="td1">사이즈</td>
                  <td className="td2">2.4 x 16.0 x 51.6 cm</td>
                </tr>
                <tr>
                  <td className="td1">무게</td>
                  <td className="td2">총중량 248g</td>
                </tr>
                <tr>
                  <td className="td1">내용</td>
                  <td className="td2">
                    가방, 청진기, 혈압계, 타건기, 체온계, 주사기 각 1 개
                  </td>
                </tr>
                <tr>
                  <td className="td1">대상 연령</td>
                  <td className="td2">3세～</td>
                </tr>
                <tr>
                  <td className="td1">주의사항</td>
                  <td className="td2">
                    천연 목재를 사용하고 있기 때문에, 나뭇결과 색감, 감촉 등
                    하나 하나 개체 차이가 있습니다.
                  </td>
                </tr>
              </table>
            </div>

            <div className="ship">
              <h3>교환 및 반품 안내</h3>
              <span style={{ whiteSpace: "pre-line" }}>
                상품에 현저한 손상이 보이는 경우에 한해,
                <br />
                상품이 수중에 도착해보다 1주일 이내에 메일 혹은 전화로 연락해
                주세요 .
                <br />
                상품 반납의 확인이 잡히는 대로, 교환 혹은 환불로 대응하겠습니다.
                <br />
                <br />
                ※주의 상품 도착으로부터 1 주일을 지나면,
                <br />
                어떠한 이유로도 반품(교환·환불)의 대응은 하기 어렵습니다.
                <br />
                PC나 스마트폰등 사용하는 디바이스의 차이에 의해,
                <br />
                사진과 실물의 색미나 소재감이 약간 다른 경우가 있습니다.
                <br />
                이미지가 다른 등의 이유로의 반품 대응도 어렵습니다.
                <br />
                <br />그 외 고객 사정의 반품에 대해서도 대응하기 어렵기 때문에,
                미리 양해 바랍니다.
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductDetail;
