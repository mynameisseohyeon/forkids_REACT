// import logo from "./logo.svg";
import "./App.css";
import HomePage from "./Screen/HomePage";
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
      <HomePage />
    </>
  );
}

export default App;
