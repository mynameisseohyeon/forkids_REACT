import "../css/MemberLogIn.css";
import { Stack, Button, Image } from "react-bootstrap";
import SignUpPage from "../Screen/SignUpPage";
import { Link } from "react-router-dom";

function MemberLogIn() {
  return (
    <>
      <div className="MemberLogInMain">
        <div className="MemberLogInInner">
          <h2 className="Account">Log in to your account</h2>
          <span className="InduceAccount">
            Enjoy more benefits after logging in.
          </span>
          <div className="CreateAccount">
            <span>Email Address</span>
            <input placeholder="@.com" />
            <span>Password</span>
            <input placeholder="••••••••••" />
            <input
              className="checkbox"
              type="checkbox"
              name="checkboxName"
              value="checkboxValue"
            />
            <span style={{ fontSize: 13, color: "gray" }}>
              Would you like to remember your email address?
            </span>
            <Button
              style={{
                backgroundColor: "white",
                color: "pink",
                border: "none",
                borderRadius: 30,
                marginLeft: "30px",
                width: "250px",
                height: "60px",
                position: "relative",
                right: -42,
                top: 30,
              }}
            >
              Log In
            </Button>
          </div>
          <Link to="/signup">
            <span className="MoveSignUpPage">
              Do not have an account? Sign Up
            </span>
          </Link>
        </div>
      </div>
    </>
  );
}

export default MemberLogIn;
