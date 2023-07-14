import Header from "../components/Header";
import MemberSignUp from "../components/MemberSignUp";

import "bootstrap/dist/css/bootstrap.min.css";

function SignUpPage() {
  return (
    <>
      <div className="SignUpPageMain">
        <div className="SignUpPageInner">
          <Header />
          <MemberSignUp />
        </div>
      </div>
    </>
  );
}

export default SignUpPage;
