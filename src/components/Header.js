import "../css/Header.css";
// import Button from "react-bootstrap/Button";
import { Stack, Button, Image } from "react-bootstrap";
// import Image from "react";

function Header() {
  return (
    <>
      <div className="HeaderMain">
        <div className="HeaderInner">
          <img src="images/LikeLion.png" style={{ width: 100 }} />
          <div className="HeaderMenu">
            <span>Home</span>
            <span>Store</span>
            <span>About</span>
          </div>
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
        </div>
      </div>
    </>
  );
}

export default Header;
