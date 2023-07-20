import "../css/MemberLogIn.css";
import { Stack, Button, Image } from "react-bootstrap";
import SignUpPage from "../Screen/SignUpPage";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

function MemberLogIn() {
  const [useremail, setUseremail] = useState(""); //이메일 초기화
  const [password, setPassword] = useState(""); //비밀번호 초기화
  const [emailValid, setEmailValid] = useState(false); //이메일 유효하지 않을 경우
  const [pwValid, setPwValid] = useState(false); //비밀번호가 유효하지 않을 경우
  const [notAllow, setNotAllow] = useState(true);
  const [showPassword, setShowPassword] = useState(false); //비밀번호 보여주기

  const navigate = useNavigate();

  const handleShowPassword = () => {
    //showPassword 눌렀을 때
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const handleEmail = (e) => {
    //이메일란에 사용지가 입력했을 때
    setUseremail(e.target.value);
    const regex =
      /^(([^<>()\[\].,;:\s@"]+(\.[^<>()\[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;
    //이메일 주소 형식 검사
    if (regex.test(useremail)) {
      setEmailValid(true); //상태 변수 업데이트
    } else {
      setEmailValid(false);
    }
  };

  const handlePw = (e) => {
    //패스워드 유효성 검사
    setPassword(e.target.value);
    const regex =
      /^(?=.*[a-zA-z])(?=.*[0-9])(?=.*[$`~!@$!%*#^?&\\(\\)\-_=+])(?!.*[^a-zA-z0-9$`~!@$!%*#^?&\\(\\)\-_=+]).{8,20}$/;
    if (regex.test(password)) {
      setPwValid(true);
    } else {
      setPwValid(false);
    }
  };

  const onClickConfirmButton = (e) => {
    //로그인 버튼 클릭 시
    const user = JSON.parse(localStorage.getItem("user"));
    if (user && user.newEmail === useremail && user.newPw === password) {
      alert("로그인에 성공했습니다.");
      navigate("/", { state: { newText: "Welcome" } });
      //로그인 성공 시 header의 Get Start버튼이 Welcome으로 바뀌도록
    } else {
      alert("등록되지 않은 회원입니다. 다시 입력해주세요");
      navigate("/signin/*");
      setUseremail("");
      setPassword("");
    }
    console.log("Email:", useremail);
    console.log("Password:", password);
  };

  useEffect(() => {
    if (emailValid && pwValid) {
      setNotAllow(false);
      return;
    }
    setNotAllow(true);
  }, [emailValid, pwValid]);

  // 화면 위로 가게하는 함수
  const scrollToTop = useRef(null);

  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

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
            <input
              type={showPassword ? "text" : "password"}
              placeholder="••••••••••"
            />
            <input
              className="checkbox"
              type="checkbox"
              name="checkboxName"
              value="checkboxValue"
            />
            <span style={{ fontSize: 13, color: "gray" }}>
              Would you like to remember your email address?
            </span>
            <Link to="/">
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
            </Link>
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
