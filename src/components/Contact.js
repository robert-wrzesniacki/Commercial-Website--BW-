import React, { Component } from "react";
import { withTranslation, Trans } from "react-i18next";
import { Container, Row, Col } from "react-bootstrap";
import GoogleMapReact from "google-map-react";

/* Import formularza kontaktowego */
import ContactForm from "./ContactForm";

/* Import logo wyświetlonego na mapie */
import maplogo from ".././images/logoBW_black.svg";

/* Ustawienia wyświetlania mapy google */
function createMapOptions() {
  return {
    fullscreenControl: true, /* Możliwość powiękrzenia mapy */
    zoomControl: true, /* Możliwość przybliżania i oddalania */
    scaleControl: true, /* Możliwość skalowania mapy */
    keyboardShortcuts: false, /* Nawigowanie mapy przy użyciu klawiatury */
    clickableIcons: false, /* Możliwość klikania w linki na mapie */
    disableDoubleClickZoom: true, /* Powiększenie mapy przy dwukliku */

    /* Styl wyglądu mapy */
    styles: [
      {
        stylers: [
          { saturation: -200 },
          { gamma: 0.8 },
          { lightness: 4 },
          { visibility: "on" },
        ],
      },
    ],
  };
}

/* Logo BusinessWise wyświetlane na mapie z linkiem kierującym do google maps */
const AnyReactComponent = ({ text }) => (
  <div className="google-map-popup" style={{ cursor: "pointer" }} onClick={() => window.open(process.env.REACT_APP_GOOGLE_MAP_LINK, "_blank")}>
    <img src={maplogo} alt="Logo" />
    { text}
  </div>
);

/* Domyślne wyświetlanie mapy */
class Map extends Component {

  /* Właściwości mapy */
  static defaultProps = {
    center: { lat: 50.05600 , lng: 19.92099 }, /* Pozycja środka mapy */
    zoom: 14.75,
  };

  /* Generowanie mapy */
  render() {
    return (
      <div className="google-map show-desktop">
        <GoogleMapReact
          options={createMapOptions} /* Pobranie ustawień wyglądu mapy */
          bootstrapURLKeys={{
            key: process.env.REACT_APP_GOOGLE_MAP_API
          }}
          defaultCenter={this.props.center} /* Pozycja środka pobrana z własciwości */
          defaultZoom={this.props.zoom} /* Wartość zbliżenia pobrana z właściości */
        >
          {/* Generowanie loga na mapie & współrzędne adresu */}
          <AnyReactComponent lat={50.05411} lng={19.93543} /> 
        </GoogleMapReact>
      </div>
    );
  }
}

/* Wyświetlanie mapy dla tabletów */
class MapTablet extends Component {

  /* Właściwości mapy */
  static defaultProps = {
    center: { lat: 50.05544 , lng: 19.92687 }, /* Pozycja środka mapy */
    zoom: 14.75, /* Wartość zbliżenia mapy */
  };

  /* Generowanie mapy dla tabletów*/
  render() {
    return (
      <div className="google-map show-tablet">
        <GoogleMapReact
          options={createMapOptions} /* Pobranie ustawień wyglądu mapy */
          bootstrapURLKeys={{
            key: process.env.REACT_APP_GOOGLE_MAP_API
          }}
          defaultCenter={this.props.center} /* Pozycja środka pobrana z własciwości */
          defaultZoom={this.props.zoom} /* Wartość zbliżenia pobrana z właściości */
        >
          {/* Generowanie loga na mapie & współrzędne adresu BusinessWise */}
          <AnyReactComponent lat={50.05411} lng={19.93543} /> 
        </GoogleMapReact>
      </div>
    );
  }
}

/* Wyświetlanie mapy dla telefonów */
class MapMobile extends Component {

  /* Właściwości mapy */
  static defaultProps = {
    center: { lat: 50.05550 , lng: 19.93543 }, /* Pozycja środka mapy */
    zoom: 14.75, /* Wartość zbliżenia mapy */
  };

  /* Generowanie mapy dla telefonów*/
  render() {
    return (
      <div className="google-map show-mobile">
        <GoogleMapReact
          options={createMapOptions} /* Pobranie ustawień wyglądu mapy */
          bootstrapURLKeys={{
            key: process.env.REACT_APP_GOOGLE_MAP_API
          }}
          defaultCenter={this.props.center} /* Pozycja środka pobrana z własciwości */
          defaultZoom={this.props.zoom} /* Wartość zbliżenia pobrana z właściości */
        >
          {/* Generowanie loga na mapie & współrzędne adresu BusinessWise */}
          <AnyReactComponent lat={50.05411} lng={19.93543} /> 
        </GoogleMapReact>
      </div>
    );
  }
}

/* Generowanie sekcji kontakt */
class Contact extends Component {
  render() {
    return (
      <section className="scrollspy" id="contact">
        <Container className="moving-show">

          {/* Tytuł sekcji */}
          <Row className="section-name">
            <Col lg={12}>
              <h1><Trans>Kontakt</Trans></h1>
            </Col>
          </Row>

          {/* Treść sekcji */}
          <Row className="footer-map-container anime">
            <div className="footer-map-adress">
              <div className="adress-container">
                <div className="adress">
                  <p>
                    Nazwa Firmy<br />
                    Adres<br />
                    00-000 Miasto<br />
                  </p>
                </div>
                <div className="mail-adress">
                  <p>
                    e-mail:{" "}
                    <a href="mailto:biuro@raw-code.pl">
                      biuro@raw-code.pl
                    </a>
                  </p>
                </div>
                <div className="little-gold-separator hide-on-mobile"></div>
                <div className="information">
                  <p>
                    Sąd Rejonowy dla m. st. Warszawy,<br />
                    XII Wydział Gospodarczy KRS w Warszawie,<br />
                    KRS 0000000000, NIP 0000000000, REGON 000000000
                  </p>
                </div>
              </div>
            </div>
            {/* Generowanie domyślnej mapy */}
            <Map /> 
            {/* Generowanie mapy dla tabletów */}
            <MapTablet /> 
            {/* Generowanie mapy dla telefonów komórkowych */}
            <MapMobile />
          </Row>

          {/* Pobranie i wyświetlenie formularza kontaktowego */}
          <ContactForm />

        </Container>
      </section>
    );
  }
}

export default withTranslation("translations")(Contact);
