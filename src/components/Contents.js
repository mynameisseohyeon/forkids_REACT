import "../css/Contents.css";
import { Stack, Button, Image } from "react-bootstrap";
import { Link } from "react-router-dom";

function Contents() {
  //캐러셀 생각 중
  return (
    <>
      <div className="ContentsMain">
        <div className="ContentsInner">
          <div className="MainKeyword">
            <span style={{ fontSize: "38px" }}>
              A child's imagination is limitless.
              <br /> At "forKids,"
              <br /> We will help make this imagination a reality.
            </span>
          </div>
          <div className="SubKeyword">
            <span style={{ fontSize: "22px", color: "#858A8F" }}>
              Discover endless possibilities with our incredible selection of
              toys.
            </span>
          </div>
          <div className="ContentsBtn">
            <Link to="/login">
              <Button
                style={{
                  backgroundColor: "pink",
                  border: "none",
                  marginLeft: "30px",
                  width: "118px",
                  height: "50px",
                }}
              >
                Get Start
              </Button>
            </Link>

            <Link to="/store">
              <Button
                style={{
                  backgroundColor: "white",
                  color: "pink",
                  border: "none",
                  marginLeft: "30px",
                  width: "118px",
                  height: "50px",
                }}
              >
                Buy Now
              </Button>
            </Link>
          </div>

          <div className="Carouel"></div>
        </div>
      </div>
    </>
  );
}

export default Contents;
