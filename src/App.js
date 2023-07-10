// import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import Contents from "./components/Contents";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div className="Main">
        <div className="inner">
          <Header />
          <Contents />
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
