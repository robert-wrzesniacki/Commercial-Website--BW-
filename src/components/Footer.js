import React, { Component } from "react";
import { withTranslation, Trans } from "react-i18next";
import { Container, Row, Col } from "react-bootstrap";


/* Stopka z automatycznie aktualizowaną datą (obecny rok) */
class Footer extends Component {
  render() {
    return (
      <section id="footer">
        <Container fluid>
          <Row className="subfooter gold-separator">
            <p>© {new Date().getFullYear()} Website</p>
          </Row>
        </Container>
      </section>
    );
  }
}

export default withTranslation("translations")(Footer);
