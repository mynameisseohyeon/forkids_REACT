import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import "../css/Header.css";
import { Stack, Button, Image } from "react-bootstrap";
import LoginPage from "../Screen/LogInPage";
import React, { useState } from "react"; // Import useState hook

function Header() {
  const [buttonText, setButtonText] = useState("Get Start"); // Initialize buttonText state

  const buttonStyle = {
    backgroundColor: "pink",
    border: "none",
    marginLeft: "30px",
    width: "118px",
    height: "50px",
    color: "white",
    transition: "background-color 0.3s, color 0.3s",
    opacity: 1,
  };

  const handleMouseEnter = (event) => {
    event.target.style.backgroundColor = "white";
    event.target.style.color = "pink";
  };

  const handleMouseLeave = (event) => {
    event.target.style.backgroundColor = "pink";
    event.target.style.color = "white";
  };

  return (
    <>
      <div className="HeaderFix">
        <div className="HeaderMain">
          <div className="HeaderInner">
            <Link to="/">
              <img src="images/LikeLion.png" style={{ width: 100 }} />
            </Link>
            <div className="HeaderMenu">
              <Link to="/">
                <span>Home</span>
              </Link>
              <Link to="/store">
                <span>Store</span>
              </Link>
              <span>My Page</span>
            </div>
            <Link to="/login">
              <Button
                style={buttonStyle}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                onClick={() => setButtonText("Welcome")} // 버튼 클릭 시 Welcome으로 수정
              >
                {buttonText}
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
