import "../css/MemberSignUp.css";
// import Button from "react-bootstrap/Button";
import { Stack, Button, Image } from "react-bootstrap";
// import Image from "react";

function MemberSignUp() {
  return (
    <>
      <div className="MemberSignUpMain">
        <div className="MemberSignUpInner">
          <h2 className="Account">Create your account</h2>
          <span className="InduceAccount">
            Create your account and enjoy special benefits at forKids,
            <br />
            where we fulfill children's dreams and hopes!
          </span>
          <div className="CreateAccount">
            <span>Name</span>
            <input placeholder="Please enter your name" />
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
              By checking this box, I agree to receive promotional emails
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
                right: -70,
                top: 30,
              }}
            >
              Create my agit ccount
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}

export default MemberSignUp;
