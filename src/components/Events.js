import "../css/Events.css";

//행사하는 상품 //구매 혜택 (00원 이상 주문 시)

function Events() {
  return (
    <>
      <div className="EventsMain">
        <div className="EventsInner">
          <h2>forkids is hosting various events based on purchase amounts!</h2>
          <div>
            <div className="EventIcon">
              <img src="images/decorating/Icon1.png" />
              <img src="images/decorating/Icon2.png" />
              <img src="images/decorating/Icon3.png" />
              <img src="images/decorating/Icon4.png" />
            </div>
            <div className="EventInt">
              <span>For purchases over $10, earn 1 stamp</span>
              <span>Free shipping for purchases over $30</span>
              <span>Receive a product worth $5 for purchases over $50</span>
              <span>Get a 7% discount for purchases over $70</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Events;
