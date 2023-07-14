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
          </div>
        </div>
      </div>
    </>
  );
}

export default MemberSignUp;
