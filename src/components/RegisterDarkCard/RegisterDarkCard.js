import React from "react";
import { Container, Button } from "react-bootstrap";

export default function RegisterDarkCard(props) {
  return (
    <section>
      <section className="position-relative">
        <div>
          <Container>
            <div className="register-dark-card  align-items-center justify-content-center">
              <h2 className="mb-3">{props.title}</h2>
              <p className="mb-5">{props.desc}</p>
              <Button variant="primary" size="lg">
                Register Now
              </Button>
            </div>
          </Container>
          <div className="gregister-dark-card-bg-img">
            <img src={`/img/registerCard/`+props.registerCardBg} alt="" />
          </div>
        </div>
      </section>
    </section>
  );
}
