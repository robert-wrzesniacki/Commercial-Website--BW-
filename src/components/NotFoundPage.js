import React, { Component } from "react";
import { withTranslation, Trans } from "react-i18next";
import { Container, Row, Col } from "react-bootstrap";

/* Import menu dla podstron */
import HeaderP from "./HeaderP";

/* Przejście na górę strony po jej odświeżeniu */
class ScrollToTopOnMount extends Component {
  componentDidMount() {
    /* Resetowanie zapamiętanej pozycji przez niektóre przeglądarki (Chrome) */
    window.onbeforeunload = function () {
      window.scrollTo(0, 0);
    };
    window.scrollTo(0, 0);
  }
  render() {
    return null
  }
}

class NotFoundPage extends Component {
  render() {
    return (
      <Container fluid className="screensize" id="other_page">
        <ScrollToTopOnMount />

        {/* Załadowanie menu dla podstron */}
        <HeaderP />

        {/* Sekcja treści błędu 404 */}
        <section className="gold-separator" id="polityka">
          <Container className="moving-show">
            <Row className="section-name">
              <Col lg={12} md={12} sm={12} xs={12}>
                <h1><Trans>Error 404</Trans></h1>
              </Col>
            </Row>
            <Row className="anime">
              <Col lg={12} md={12} sm={12} xs={12}>
                <p>Strona której szukasz nie istnieje lub została przesniesiona w inne miejsce.</p>
              </Col>
            </Row>
          </Container>
        </section>
      </Container>
    );
  }
}

export default withTranslation(["translations"])(NotFoundPage);