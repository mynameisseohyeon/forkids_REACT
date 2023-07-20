import { Stack, Button, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import React, { useState } from "react";
import "../css/MemberSignUp.css";

function MemberSignUp() {
  // Create state variables to store input values
  const [name, setName] = useState("");
  const [useremail, setUseremail] = useState(""); //이메일 초기화
  const [password, setPassword] = useState(""); //비밀번호 초기화
  const [emailValid, setEmailValid] = useState(false); //이메일 유효하지 않을 경우
  const [pwValid, setPwValid] = useState(false); //비밀번호가 유효하지 않을 경우
  const [notAllow, setNotAllow] = useState(true);
  const [showPassword, setShowPassword] = useState(false); //비밀번호 보여주기

  const handleSignUp = () => {
    //input에 입력된 값들을 초기화
    setName("");
    setUseremail("");
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
              value={useremail}
              onChange={(e) => setUseremail(e.target.value)}
            />
            <span>Password</span>
            <input
              type={showPassword ? "text" : "password"}
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
                onClick={handleSignUp}
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
