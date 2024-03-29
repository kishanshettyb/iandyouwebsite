import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import FirstImg from "../../assets/img/cards/1st.jpeg";
import SecondImg from "../../assets/img/cards/6__01.jpeg";
import ThirdImg from "../../assets/img/cards/3rd-1.jpeg";
import Line from "../../assets/img/others/line-2.png";
import { Link } from "react-router-dom";

export default function IandyouCard() {
  return (
    <section className="iandyou-card-section">
      <Container>
        <Row className="pb-5">
          <Col xs={4} md={4} className="p-0">
            <div className="image-grid">
              <div className="image-grid__item">
                <Link to="about" className="grid-item">
                  <div
                    className="grid-item__image"
                    style={{ backgroundImage: `url(${FirstImg})` }}
                  ></div>
                  <div className="grid-item__hover"></div>
                  <div className="title">I</div>
                </Link>
              </div>
            </div>
          </Col>
          <Col xs={4} md={4} className="p-0">
            <div className="image-grid">
              <div className="image-grid__item center_item">
                <Link to="iandyou" className="grid-item">
                  <div
                    className="grid-item__image"
                    style={{ backgroundImage: `url(${SecondImg})` }}
                  ></div>
                  <div className="grid-item__hover"></div>
                  <div className="title">You</div>
                </Link>
              </div>
            </div>
          </Col>
          <Col xs={4} md={4} className="p-0">
            <div className="image-grid">
              <div className="image-grid__item">
                <Link to="#" className="grid-item">
                  <div
                    className="grid-item__image"
                    style={{ backgroundImage: `url(${ThirdImg})` }}
                  ></div>
                  <div className="grid-item__hover"></div>
                  <div className="title">We</div>
                </Link>
              </div>
            </div>
          </Col>
        </Row>

        <div className="text-center">
          <h2
            className="big-title text-center  mt-5 wow fadeInUp"
            data-wow-delay="0.5s"
          >
            I And You Being Together
            <br />
            <span className="gradient-text">Let's move together</span>
          </h2>
          <h3
            className="special-title wow fadeInUp"
            data-wow-delay="0.5s"
            data-wow-duration="1s"
          >
            {" "}
            - Sangachadwam
          </h3>
          <div className="text-center">
            <img
              src={Line}
              alt="line"
              className="line wow fadeInUp"
              data-wow-delay="1s"
              data-wow-duration="1s"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
