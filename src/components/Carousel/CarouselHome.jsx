import React from "react";
import Carousel from "react-bootstrap/Carousel";
import gro1 from "assets/images/grocery111.jpg";
import gro2 from "assets/images/grocery2.jpg";
import gro3 from "assets/images/grocery33.jpg";

function Carousel1() {
  return (
      <Carousel dir="ltr">
        <Carousel.Item>
          <img className="d-block w-100" src={gro1} alt="First slide"/>
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={gro2} alt="Second slide"/>

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={gro3} alt="Third slide"/>

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
  );
}

export default Carousel1;
