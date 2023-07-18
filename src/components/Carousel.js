import Carousel from "react-bootstrap/Carousel";

function DarkVariantExample() {
  return (
    <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="images/decorating/kids3.png"
          alt="First slide"
          style={{ width: 1080, height: 600 }}
        />
        <Carousel.Caption></Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="images/decorating/kids4.png"
          alt="Second slide"
          style={{ width: 1080, height: 600 }}
        />
        <Carousel.Caption></Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="images/decorating/kids11.png"
          alt="Third slide"
          style={{ width: 1080, height: 600 }}
        />
        <Carousel.Caption></Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default DarkVariantExample;
