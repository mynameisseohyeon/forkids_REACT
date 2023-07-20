import { Stack, Button, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import React, { useState } from "react";
import "../css/MemberSignUp.css";

function MemberSignUp() {
  // Create state variables to store input values
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignUp = () => {
    //input에 입력된 값들을 초기화
    setName("");
    setEmail("");
    setPassword("");
  };

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
            <input
              placeholder="Please enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <span>Email Address</span>
            <input
              placeholder="@.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <span>Password</span>
            <input
              placeholder="••••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <input
              className="checkbox"
              type="checkbox"
              name="checkboxName"
              value="checkboxValue"
            />
            <span style={{ fontSize: 13, color: "gray" }}>
              By checking this box, I agree to receive promotional emails
            </span>
            <Link to="/login">
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
                onClick={handleSignUp} // Call the handleSignUp function on button click
              >
                Create my account
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default MemberSignUp;
