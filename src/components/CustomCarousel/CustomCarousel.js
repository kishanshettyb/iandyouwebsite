import React from "react";
import { Carousel } from "react-bootstrap";
import Banner1 from "../../assets/img/banners/banner-1.jpg";
import Banner2 from "../../assets/img/banners/banner-2.jpg";

export default function CustomCarousel() {
  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100 banner-img"
            src={Banner2}
            alt="First slide"
          />
          {/* <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption> */}
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 banner-img"
            src={Banner1}
            alt="Third slide"
          />

          {/* <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption> */}
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 banner-img"
            src={Banner1}
            alt="Third slide"
          />

          {/* <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption> */}
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
