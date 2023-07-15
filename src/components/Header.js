import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import "../css/Header.css";
import { Stack, Button, Image } from "react-bootstrap";
import HomePage from "../Screen/HomePage";
import StorePage from "../Screen/StorePage";
import DetailPage from "../Screen/DetailPage";

function Header() {
  return (
    <>
      <Router>
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
              <Link to="/detail">
                <span>Detail</span>
              </Link>
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

        {/* 라우트 설정 */}
        <Routes>
          <Route path="/" exact component={HomePage} />
          <Route path="/store" component={StorePage} />
          <Route path="/detail" component={DetailPage} />
        </Routes>
      </Router>
    </>
  );
}

export default Header;
