import "../css/Header.css";

function Header() {
  return (
    <>
      <div className="HeaderMain">
        <div className="HeaderInner">
          <span>Home</span>
          <span>Store</span>
          <span>About</span>
          <button>Get Started</button>
        </div>
      </div>
    </>
  );
}

export default Header;
