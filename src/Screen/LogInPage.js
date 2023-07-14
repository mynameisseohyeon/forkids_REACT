import Header from "../components/Header";
import MemberLogIn from "../components/MemberLogIn";

import "bootstrap/dist/css/bootstrap.min.css";

function LogInPage() {
  return (
    <>
      <div className=" LogInPageMain">
        <div className="LogInPageInner">
          <Header />
          <MemberLogIn />
        </div>
      </div>
    </>
  );
}

export default LogInPage;
