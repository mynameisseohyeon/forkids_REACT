// import logo from "./logo.svg";
import "./App.css";
import HomePage from "./Screen/HomePage";
import StorePage from "./Screen/StorePage";
import DetailPage from "./Screen/DetailPage";
import SignUpPage from "./Screen/SignUpPage";
import LogInPage from "./Screen/LogInPage";
import Header from "./components/Header";
import Footer from "./components/Footer";
import data from "./data";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from "react";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  let [toys, setToys] = useState(data);

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/store" element={<StorePage />} />
          <Route path="/detail" element={<DetailPage />} />
          <Route path="/detail/:id" element={<DetailPage toys={toys} />} />{" "}
          {/* props 설정 */}
          <Route path="/login" element={<LogInPage />} />
          <Route path="/signup" element={<SignUpPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
