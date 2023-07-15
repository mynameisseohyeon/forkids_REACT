import MemberSignUp from "../components/MemberSignUp";

import "bootstrap/dist/css/bootstrap.min.css";

function SignUpPage() {
  return (
    <>
      <div className="SignUpPageMain">
        <div className="SignUpPageInner">
          <MemberSignUp />
        </div>
      </div>
    </>
  );
}

export default SignUpPage;
