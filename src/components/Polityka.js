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


class Polityka extends Component {
  render() {
    return (
      <Container fluid className="screensize" id="other_page">
        <ScrollToTopOnMount />

        {/* Załadowanie menu dla podstron */}
        <HeaderP />

        {/* Sekcja treści polityki prywatności */}
        <section className="gold-separator" id="polityka">
          <Container className="moving-show">
            <Row className="section-name">
              <Col lg={12} md={12} sm={12} xs={12}>
                <h1><Trans>Polityka prywatności</Trans></h1>
              </Col>
            </Row>
            <Row className="anime">
              <Col lg={12} md={12} sm={12} xs={12}>
                <h2>Administrator danych</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Diam maecenas sed enim ut sem viverra aliquet eget. Neque viverra justo nec ultrices dui sapien eget mi. Vulputate ut pharetra sit amet aliquam id. Sed adipiscing diam donec adipiscing tristique risus nec. Pellentesque sit amet porttitor eget dolor morbi non. Amet massa vitae tortor condimentum lacinia quis vel eros. Aliquam ultrices sagittis orci a scelerisque. Purus sit amet luctus venenatis lectus magna. Dignissim cras tincidunt lobortis feugiat. Ac tincidunt vitae semper quis lectus nulla at. Augue ut lectus arcu bibendum at varius vel pharetra.</p>
                <div className="little-gold-separator przypis-separator"></div>
                <div className="przypis">
                  <p><sup> 1  </sup>&nbsp;Sollicitudin tempor id eu nisl nunc mi. Tempus urna et pharetra pharetra massa massa ultricies mi. Tempus quam pellentesque nec nam aliquam sem et.</p>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
      </Container>
    );
  }
}

export default withTranslation(["translations"])(Polityka);