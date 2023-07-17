import "../css/Contents.css";
import { Stack, Button, Image } from "react-bootstrap";
import { Link } from "react-router-dom";

function Contents() {
  const buttonStyle = {
    backgroundColor: "pink",
    border: "none",
    marginLeft: "30px",
    width: "118px",
    height: "50px",
    color: "white",
    transition: "background-color 0.3s, color 0.3s",
  };

  const handleMouseEnter = (event) => {
    event.target.style.backgroundColor = "white";
    event.target.style.color = "pink";
  };

  const handleMouseLeave = (event) => {
    event.target.style.backgroundColor = "pink";
    event.target.style.color = "white";
  };

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
                style={buttonStyle}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
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
                onMouseEnter={handleMouseLeave}
                onMouseLeave={handleMouseEnter}
              >
                Buy Now
              </Button>
            </Link>
          </div>

          <div className="Carouel">
            <img src="images/decorating/kids3.png" style={{ width: "100%" }} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Contents;
