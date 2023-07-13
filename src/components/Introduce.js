import "../css/Introduce.css";

//주요 상품 및 카테고리 소개, 안정성과 품질 강조, 배송 안내,
// 교육적 가치 강조(창의력, 문제 해결 능력 발달)

function Introduce() {
  return (
    <>
      <div className="IntroduceMain">
        <div className="IntroduceInner">
          <div className="privileges">
            <div className="introIcon">
              <div className="introBox" style={{ marginRight: 20 }}></div>
              <div className="introBox"></div>
              <div
                className="introBox"
                style={{ marginRight: 20, marginTop: 110 }}
              ></div>
              <div className="introBox"></div>
            </div>
            <div className="introText">
              <h3 style={{ display: "inline-block" }}>
                Experience the privileges after signing up
              </h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Introduce;
