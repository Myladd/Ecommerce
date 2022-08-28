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
            <h3>فروشگاه تره بار</h3>
            <p>محصولات تازه و با کیفیت و ارگانیک</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={gro2} alt="Second slide"/>

          <Carousel.Caption>
            <h3>فروشگاهی با انواع میوه و سبزیجات</h3>
            <p>به صورت روزانه تهیه می شوند.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={gro3} alt="Third slide"/>

          <Carousel.Caption>
            <h3>سلامتی شما با محصولات ارگانیک</h3>
            <p>با بیش از ۱۰۰۰ نوع تنوع محصولات</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
  );
}

export default Carousel1;
