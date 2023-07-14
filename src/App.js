// import logo from "./logo.svg";
import "./App.css";
import HomePage from "./Screen/HomePage";
import StorePage from "./Screen/StorePage";
import DetailPage from "./Screen/DetailPage";
import SignUpPage from "./Screen/SignUpPage";
import LogInPage from "./Screen/LogInPage";

import {
  Routes,
  Route,
  Link,
  useNavigate,
  Outlet,
  useNavigation,
} from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
      {/* <HomePage /> */}
      {/* <StorePage /> */}
      {/* <DetailPage /> */}
      <SignUpPage />
      {/* <LogInPage /> */}
    </>
  );
}

export default App;
