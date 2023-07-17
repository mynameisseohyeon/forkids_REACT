import "../css/Introduce.css";

//주요 상품 및 카테고리 소개, 안정성과 품질 강조, 배송 안내,
// 교육적 가치 강조(창의력, 문제 해결 능력 발달)
//스탬프 적립 안내, 포장 서비스 및 카드 서비스, 장난감 월별 구독 서비스
// 장난감 서비스 구독 시 매달 새로운 장난감 배송

function Introduce() {
  return (
    <>
      <div className="IntroduceMain">
        <div className="IntroduceInner">
          <div className="privileges">
            {/* <div className="introIcon">
              <div className="introBox" style={{ marginRight: 20 }}></div>
              <div className="introBox"></div>
              <div
                className="introBox"
                style={{ marginRight: 20, marginTop: 20 }}
              ></div>
              <div className="introBox"></div>
            </div> */}
            <div className="introText">
              <h3 style={{ display: "inline-block" }}>
                Experience the privileges after signing up
              </h3>
            </div>

            <div className="introMsg">
              <img
                className="intImag"
                src="images/decorating/intro4.png"
                style={{ top: -180, position: "relative" }}
              />
              <span className="intText">
                We provide a service at our toy online store where we deliver
                heartfelt messages along with gift wrapping. At the Kids Toy
                Online Store, make special occasions even more meaningful by
                including your warm thoughts and heartfelt wishes along with
                your gift. The carefully prepared gift wrapping is even more
                beautiful and appealing. We express your desired sentiments
                through our meticulous packaging and unique designs. You can
                embroider your requested message on a card to accompany the
                gift. We are here to assist you in creating new memories and
                ensuring that the recipient is left with wonderful and cherished
                moments. Experience this service to create lasting memories for
                the recipient!
              </span>
            </div>

            <div className="introMsg">
              <span
                className="intText"
                style={{ top: 100, position: "relative" }}
              >
                "Experience a New World Every Month - Gift Your Child an
                Enchanting Adventure with Our $29.9 Monthly Kids Toy
                Subscription Service!" Give your child a mesmerizing experience
                that will banish boredom! Through our $29.9 monthly kids toy
                subscription, conveniently have new and captivating toys
                delivered to your doorstep every month. No more worries, as a
                joyful box eagerly awaited by your child will arrive each month.
                We curate a fantastic package composed of the products you
                prefer, delivering a very special gift that ignites your child's
                curiosity and imagination.
              </span>
              <img
                className="intImag"
                src="images/decorating/kids6.png"
                style={{ top: -50, position: "relative" }}
              />
            </div>

            <div className="introMsg">
              <img
                className="intImag"
                src="images/decorating/kids9.png"
                style={{ top: -60, position: "relative" }}
              />
              <span
                className="intText"
                style={{ top: 120, position: "relative" }}
              >
                Our products help enhance children's creativity and imagination.
                They make the time spent with children more enjoyable. We
                deliver special gifts that stimulate children's curiosity and
                imagination. Our products emphasize educational value and
                contribute to the development of children's creativity and
                problem-solving skills. They make the time spent with our
                products even more enjoyable. We provide high-quality products
                that prioritize educational value and safety. Experience the
                special gifts that support children's growth and development.
                Please note that the translation provided is a revised version
                of the original text for better clarity and readability in
                English.
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Introduce;
