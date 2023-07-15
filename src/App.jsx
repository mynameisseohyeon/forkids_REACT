// import logo from "./logo.svg";
import "./App.css";
import HomePage from "./Screen/HomePage";
import StorePage from "./Screen/StorePage";
import DetailPage from "./Screen/DetailPage";
import SignUpPage from "./Screen/SignUpPage";
import LogInPage from "./Screen/LogInPage";
import Header from "./components/Header";
import Footer from "./components/Footer";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/store" element={<StorePage />} />
          <Route path="/detail" element={<DetailPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
