import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import imageBhramhacharini from "../../assets/img/blog/brahmacharini.jpg";
import { Container, Row, Col } from "react-bootstrap";
import Comment from "../Blog/Comment";
export default function Brahmacharini() {
  return (
    <div>
      <Header />
      <Container>
        <Row className="mt-5 mb-5">
          <Col md={6}>
            <img
              alt="Unfold Ganesha"
              src={imageBhramhacharini}
              className="img-blog-details shadow"
            />
          </Col>
          <Col md={6} className=" mb-5">
            <h2 className="title mb-4">
              Eshwari Brahmacharini(Superficial meaning)
            </h2>
            <p>
              The second day of Navaratri is dedicated to Eshwari Brahmacharini.
              The goddess walks bare feet with a rudraksh mala in one hand and a
              sacred Kamandalu in the other. The meditative form of this goddess
              symbolizes Goddess Parvati when she is engaged in deep meditation
              to please Lord Shiva.
            </p>
            <h2 className="sub-title">What to offer:</h2>
            <p>
              Eshwari Brahmacharini is offered sugar for the longevity of the
              family members.
            </p>
            <h2 className="sub-title">The Antar artha:</h2>
            <p>
              Brahma means absolute universal reality or consciousness, Chari
              means the one who walk towards that reality meaning a Sadhak. A
              Sadhak must be a Brahmachari, the one who walks towards the
              absolute reality, the journey is called tapasya. Tapasya means one
              who is engaged in Body, Mind and Emotion management, such
              management is called Tapasya, which I have imparted to all my
              sadhaks during the basic Eshwari kriya workshop.
            </p>
            <p>
              Devi Eshwari Bramhacharini symbolically holding Rudraksh and
              Kamandalu which denotes Tapasya / Austerity , she is setting an
              example to us that being a cosmic mother, the mother of cosmic
              creation and the creator of trinity, she has come down to the
              level of a sadhak to uplift him/her.
            </p>
          </Col>
          <Col md={12} className="mt-5">
            <p>
              Devi Eshwari Bramhacharini symbolically holding a Rudraksh and
              Kamandalu symbolizes Tapasya / Austerity, she is setting an
              example to us that being a cosmic mother, the mother of cosmic
              creation and also the creator of the trinities, she has come down
              to the level of a sadhak and is setting example for us to follow.
              The Tapasya can be done in 5 levels or five ways those are
              Physical, Verbal , Mental , Emotional and even in Energy level, so
              in Sahasranama it said she is Pancha Yagna Priya because Tapasya
              is a Yagna, if you go through Bagavat Geeta Krishna speaks about
              many types of Yagnas and the simple best method to do Tapasya is
              to be regular in Sadhana, implement the knowledge which gained by
              Sri Guru, having faith on Sri Guru, Sadhana and engage in self
              less service .
            </p>
            <p>
              So Brahmacharini literally means the ability to perform austerity,
              Eshwari is your Mind, your Intellect, your Memory, your very Ego
              and even your own Self, one needs the grace and blessings of
              Divine Mother or else one can't perform Tapasya, you should know
              the secret and the secret is the Strength and Power to perform
              Austerity which also is the divine Mother and meanwhile she is
              your 25 shakthi + 11 Shiva + 01 Para Shakti Tatvas, so
            </p>
            <b>
              The ability to perform Tapasya is possible with the blessings of
              Bramhacharini or in another dimension Tapasya itself is Divine
              Mother, Eshwari Brahmacharini.
            </b>
            <br />
            <br />
            <b>As is mentioned in the Sree Lalitha Sahasranama Stotram</b>
            <br />
            <br />
            <h2 className="special-title text-center">
              <Comment />
              Mano-rupekshu kodanda pancha tanmatra sayaka Nijaruna prabha-pura
              majabhramhanda mandala
              <Comment />
              LSN-03
            </h2>
            <p>
              <b>
                <span
                  clasName="lora-text"
                  style={{ fontFamily: "Lora", fontSize: "20px" }}
                >
                  - Sri Prasad
                </span>
              </b>
              <br />
              &nbsp;&nbsp;&nbsp;Jai Guru Dev...
            </p>
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
}
