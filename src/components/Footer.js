import "../css/Footer.css";

//해당 스토어의 sns, copright 및 개발자, 기타 page등등

function Footer() {
  return (
    <>
      <div className="FooterMain">
        <div className="FooterInner">
          <div className="below">
            <div className="sns">
              <h2>Move</h2>
              <span>
                Go to the appropriate social media
                <br /> for more information
              </span>
              <div>
                <img src="images/sns/sns1.png" />
                <img src="images/sns/sns2.png" />
                <img src="images/sns/sns3.png" />
                <img src="images/sns/sns4.png" />
              </div>
            </div>
            <div className="pagesName">
              <h2>Pages</h2>
              <span>Buy Now</span>
              <br />
              <span>About Us</span>
              <br />
              <span>Get Start</span>
              <br />
            </div>
            <div className="dev">
              <h2>Developer</h2>
              <span>uimi7625@naver.com</span>
              <br />
            </div>
          </div>

          <div
            className="copyright"
            style={{ textAlign: "center", paddingTop: 45 }}
          >
            <h2>Copyright © 2023 forKids. All rights reserved.</h2>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
