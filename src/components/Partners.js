import "../css/Partners.css";

function Partners() {
  return (
    <>
      <div className="PartnersMain">
        <div className="PartnersInner">
          <span style={{ fontSize: 18 }}>
            We are sponsoring the following organizations.
          </span>
          <div style={{ paddingTop: 30 }}>
            <img src="images/partners/partners1.png" />
            <img src="images/partners/partners2.png" />
            <img src="images/partners/partners3.png" />
            <img src="images/partners/partners4.png" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Partners;
