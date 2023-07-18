import "../css/Review.css";
import { Stack, Button, Image } from "react-bootstrap";
import Card from "./Card";

function Review() {
  return (
    <>
      <div className="ReviewMain">
        <div className="ReviewInner">
          <div style={{ paddingBottom: 40 }}>
            <span
              style={{ textAlign: "center", fontSize: 16, display: "block" }}
            >
              Introducing the valuable reviews written by our customers who have
              used and shared their experiences with our products
            </span>
          </div>
          <Card
            style={{ margin: 0, paddingRight: 10, display: "inline-block" }}
          />
          <Card
            style={{ margin: 0, paddingRight: 10, display: "inline-block" }}
          />
        </div>
      </div>
    </>
  );
}

export default Review;
