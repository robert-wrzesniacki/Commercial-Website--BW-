import React, { Component, useEffect } from "react";
import { withTranslation, Trans } from "react-i18next";
import { Container, Row, Col } from "react-bootstrap";
import Flippy, { FrontSide, BackSide } from "react-flippy";
import { SRLWrapper } from "simple-react-lightbox"; /* import lightbox */
import Siema from "siema"; /* import carusel */

/* Import nagłównka z menu */
import Header from "./Header";

/* Import sekcji kontakt */
import Contact from "./Contact";

/* Import zdjęć na stronę główną */
import video from "../images/video.mp4";
import video_big from ".././images/video_big.mp4";
import video_small from ".././images/video_small.mp4";
import onas from ".././images/1.jpg";
import psdm from ".././images/logo_PSDM.png";
import evo from ".././images/logo_EVO.png";
import invest from ".././images/3.jpg";
import ang from ".././images/logo_ang.png";
import poster from ".././images/plakat.jpg";
import posterm from ".././images/plakat_m.jpg";

/* Import zdjęć firm */

import w1 from ".././images/Cooperation/logo_wspolpracownik_2.jpg";
import w2 from ".././images/Cooperation/logo_wspolpracownik_3.jpg";
import w3 from ".././images/Cooperation/logo_wspolpracownik_4.jpg";
import w4 from ".././images/Cooperation/logo_wspolpracownik_5.jpg";
import w5 from ".././images/Cooperation/logo_wspolpracownik_6.jpg";
import w6 from ".././images/Cooperation/logo_wspolpracownik_7.jpg";
import w7 from ".././images/Cooperation/logo_wspolpracownik_8.jpg";
import w8 from ".././images/Cooperation/logo_wspolpracownik_9.jpg";
import w9 from ".././images/Cooperation/logo_wspolpracownik_10.jpg";
import w10 from ".././images/Cooperation/logo_wspolpracownik_1.jpg";

/* Import zdjęć zespołu */
import z1 from ".././images/Team/Z1.jpg";
import z2 from ".././images/Team/Z2.jpg";
import z3 from ".././images/Team/Z3.jpg";
import z4 from ".././images/Team/Z4.jpg";
import z5 from ".././images/Team/Z5.jpg";
import z6 from ".././images/Team/Z6.jpg";
import z7 from ".././images/Team/Z7.jpg";
import z8 from ".././images/Team/Z8.jpg";

/* Definicja ustawień wyświetlania lightbox'a */
const img_options = {
  buttons: {
    backgroundColor: "rgba(30,30,36,0.8)",
    iconColor: "rgba(255, 255, 255, 0.8)",
    iconPadding: "5px",
    showAutoplayButton: false,
    showCloseButton: true,
    showDownloadButton: false,
    showFullscreenButton: false,
    showNextButton: false,
    showPrevButton: false,
    size: "40px"
  },
  caption: {
    showCaption: false
  },
  thumbnails: {
    showThumbnails: false
  },
  settings: {
    overlayColor: "rgba(0, 0, 0, 0.9)",
    transitionTimingFunction: "ease-in-out",
    disablePanzoom: true,
    disableWheelControls: true,
    hideControlsAfter: false
  }
};

/* Przejście na górę strony po jej odświeżeniu */
class ScrollToTopOnMount extends Component {
  componentDidMount() {
    /* Resetowanie zapamiętanej pozycji przez niektóre przeglądarki (Chrome) */
    window.onbeforeunload = function () {
      window.scrollTo(0, 0);
    };
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
  }
  render() {
    return null
  }
}

/* Generowanie strony głównej */
class Home extends Component {
  render() {
    return (
      <Container fluid>
        <ScrollToTopOnMount />
        <Header /> {/* Wyświetlenie nagłówka */}
        <Slider /> {/* Wyświetlenie slidera */}
        <div className="background-pattern">
          <About />  {/* Wyświetlenie sekcji "O Nas" */}
          <Investments /> {/* Wyświetlenie sekcji "Inwestycje" */}
        </div>
        <div className="background-pattern">
          <Credits /> {/* Wyświetlenie sekcji "Kredyty" */}
          <Team /> {/* Wyświetlenie sekcji "Nasz Zespół" */}
        </div>
        <div className="background-pattern-bottom">
          <Contact /> {/* Wyświetlenie sekcji "Kontakt" */}
        </div>
      </Container>
    );
  }
}

/* Generowanie slidera */
class Slider extends Component {
  render() {
    return (
      <section className="slider scrollspy" id="home">
        <Container fluid>
          <video className="videoTag big" autoPlay loop muted playsInline poster={poster}> {/* Wyświetlanie video dla dużych ekranów. Automatyczne włączenie */}
            <source src={video_big} type="video/mp4" />
          </video>
          <video className="videoTag small" autoPlay loop muted playsInline poster={poster}>{/* Wyświetlanie video dla małych ekranów. Automatyczne włączenie */}
            <source src={video} type="video/mp4" />
          </video>
          <video className="videoTag smallx" autoPlay loop muted playsInline poster={posterm}>{/* Wyświetlanie video dla małych ekranów. Automatyczne włączenie */}
            <source src={video_small} type="video/mp4" />
          </video>
          <div id="page-top"></div>
        </Container>
      </section>
    );
  }
}

/* Generowanie sekcji "O Nas" */
class About extends Component {
  render() {
    return (
      <section className="gold-separator scrollspy" id="about">
        <Container className="moving-show enable">

          {/* Nagłówek sekcji */}
          <Row className="section-name">
            <Col lg={12} md={12} sm={12} xs={12}>
              <h1><Trans>O nas</Trans></h1>
            </Col>
          </Row>

          {/* Treść sekcji */}
          <Row className="animation flex-center">
            <Col lg={6} md={12} sm={12} xs={12}>
              <p>
                <Trans i18nKey="About-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Diam maecenas sed enim ut sem viverra aliquet eget. Neque viverra justo nec ultrices dui sapien eget mi. Vulputate ut pharetra sit amet aliquam id.</Trans>
              </p>
              <ul>
                <li>
                  <Trans i18nKey="About-list-1">Sed adipiscing diam donec adipiscing tristique risus nec.</Trans>
                </li>
                <li>
                  <Trans i18nKey="About-list-2">Pellentesque sit amet porttitor eget dolor morbi non. Amet massa vitae tortor condimentum lacinia quis vel eros.</Trans>
                </li>
              </ul>
            </Col>
            <Col lg={6} md={12} sm={12} xs={12}>
              <SRLWrapper options={img_options}> {/* Włączenie lightbox'a dla zdjęcia "o nas" */}
                <img src={onas} className="onas" alt="O nas" />
              </SRLWrapper>
            </Col>
          </Row>

          {/* Złoty separator wyświetlany tylko na użądzeniach mobilnych */}
          <Row className="padding-top-sep show-on-mobile">
            <div className="little-gold-separator"></div>
          </Row>

        </Container>
      </section>
    );
  }
}

/* Generowanie sekcji "Investments" */
class Investments extends Component {
  render() {
    return (
      <section className="investments scrollspy" id="investments">
        <Container className="moving-show">

          {/* Nagłówek sekcji */}
          <Row className="section-name">
            <Col lg={12} md={12} sm={12} xs={12}>
              <h1><Trans>Inwestycje</Trans></h1>
            </Col>
          </Row>

          {/* Treść sekcji */}
          <Row className="animation">
            <Col lg={3} md={3} sm={6} xs={12}>
              <a href="#"><img src={evo} className="psdm" alt="Logo EVO" /></a>
            </Col>
            <Col lg={9} md={9} sm={12} xs={12}>
              <p>
                <Trans i18nKey="Investments-description-1">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Diam maecenas sed enim ut sem viverra aliquet eget.</Trans>
              </p>
              <p>
                <Trans i18nKey="Investments-description-2">Neque viverra justo nec ultrices dui sapien eget mi.</Trans>
              </p>
              <div className="little-gold-separator hide-on-mobile"></div>
            </Col>
          </Row>
          <Row className="animation">
            <Col lg={3} md={0} sm={0} xs={0}></Col>
            <Col lg={5} md={6} sm={12} xs={12}>
              <p>
                <Trans i18nKey="Investments-description-3">Amet massa vitae tortor condimentum lacinia quis vel eros. Aliquam ultrices sagittis orci a scelerisque.</Trans>
              </p>
              <p className="p-small-text">
                <Trans i18nKey="Investments-description-4">Purus sit amet luctus venenatis lectus magna.</Trans> <br />
                <a href="#" target="_blank" rel="noopener noreferrer"><Trans>Pobierz plik.</Trans></a>
              </p>
            </Col>
            <Col lg={4} md={6} sm={12} xs={12}>
              <img src={invest} className="invest-img" alt="Inwestycje" />
            </Col>
          </Row>

        </Container>
        <Container className="animation">

          {/* Nagłówek sekcji */}
          <Row className="section-name">
            <Col lg={12} md={12} sm={12} xs={12} className="white-h1">
              <h1><Trans>Współpracujemy z</Trans>:</h1>
            </Col>
          </Row>

        </Container>
        <div className="Cooperation-carousel gold-separator ">
          <Container className="top-bottom-padding moving-show">

            {/* Karuzela i wszystkie loga */}
            <div className="carousel">
              <img src={w1} alt="Alt title" />
              <img src={w2} alt="Alt title" />
              <img src={w3} alt="Alt title" />
              <img src={w4} alt="Alt title" />
              <img src={w5} alt="Alt title" />
              <img src={w6} alt="Alt title" />
              <img src={w7} alt="Alt title" />
              <img src={w8} alt="Alt title" />
              <img src={w9} alt="Alt title" />
              <img src={w10} alt="Alt title" />
            </div>
          </Container>
        </div>
      </section>
    );
  }
  /* Ustawienia karuzeli */
  componentDidMount() {
    const options = {
      selector: ".carousel",
      easing: "cubic-bezier(0.55, 0.16, 0.59, 0.98)",
      duration: 600, /* Czas trwania przejścia */
      loop: true, /* Zapętlenie */
      perPage: { /* Ilość elementów wyświtlanych na stronie w zależności od rozdzielczości */
        0: 1,
        320: 2,
        480: 3,
        576: 3,
        768: 4,
        1024: 6,
      },
    };

    this.siema = new Siema(options);

    /* Ustawienie prędkości przesuwania się ikon */
    setInterval(() => this.siema.next(), 2500);
  }
}

/* Generowanie sekcji "Kredyty" */
class Credits extends Component {
  render() {
    return (
      <section className="gold-separator scrollspy" id="credit">
        <Container className="moving-show">
          <Row className="section-name">
            <Col lg={12} md={12} sm={12} xs={12}>
              <h1><Trans>Kredyty</Trans></h1>
            </Col>
          </Row>
          <Row className="animation">
            <Col lg={3} md={3} sm={6} xs={12}>
              <img src={ang} className="ang" alt="Logo ANG" />
            </Col>
            <Col lg={9} md={9} sm={12} xs={12}>
              <p>
                <Trans i18nKey="Credits-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Diam maecenas sed enim ut sem viverra aliquet eget. Neque viverra justo nec ultrices dui sapien eget mi. Vulputate ut pharetra sit amet aliquam id. Sed adipiscing diam donec adipiscing tristique risus nec. Pellentesque sit amet porttitor eget dolor morbi non.</Trans>
              </p>
            </Col>
          </Row>
          <Row className="padding-top-sep show-on-mobile">
            <div className="little-gold-separator"></div>
          </Row>
        </Container>
      </section>
    );
  }
}

/* Generowanie sekcji "Nasz Zespół" */
const flip_speed = 800; /* Szybkość obracania się elementów */
class Team extends Component {
  render() {
    return (
      <section className="scrollspy" id="team">
        <Container className="moving-show">

          {/* Nagłówek sekcji */}
          <Row className="section-name">
            <Col lg={12} md={12} sm={12} xs={12}>
              <h1><Trans>Zespół</Trans></h1>
            </Col>
          </Row>

          {/* Treść sekcji */}
          <Row className="team-container animation">
            <Col className="team-element" lg={3} md={6} sm={6} xs={12}>

              <Flippy ref={(r) => (this.flippyHorizontal_1 = r)}
                flipOnClick={false}>
                <FrontSide animationDuration={flip_speed}>
                  <div className="team-element-front-wrap">
                    <div className="team-wrap">
                      <div className="team-img" style={{ cursor: "pointer" }} onClick={() => this.flippyHorizontal_1.toggle()}><img src={z1} alt="MS" /><div className="team-front-flip-toggle"><Trans>O mnie</Trans> {'>'}</div><div onclick="void(0)" className="team-img-plus icon"></div></div>
                      <div className="team-name"><h2>Imię i Nazwisko</h2></div>
                      <div className="team-position"><h3><Trans i18nKey="Team-position-1">Stanowisko</Trans></h3></div>
                    </div>
                    <div className="team-wrap">
                      <div className="team-separator"></div>
                      <div className="team-email"><a href="mailto:imie.nazwisko@raw-code.pl" target="_top">imie.nazwisko@raw-code.pl</a></div>
                    </div>
                  </div>

                </FrontSide>
                <BackSide animationDuration={flip_speed}>
                  <div className="team-element-back-wrap" style={{ cursor: "pointer" }} onClick={() => this.flippyHorizontal_1.toggle()}>
                    <div className="team-name"><h2>Imię i Nazwisko</h2></div>
                    <div className="team-city"><p>Miasto</p></div>
                    <div className="team-description">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        <p>Diam maecenas sed enim ut sem viverra aliquet eget. Neque viverra justo nec ultrices dui sapien eget mi.</p>
                        <p>Vulputate ut pharetra sit amet aliquam id. Sed adipiscing diam donec adipiscing tristique risus nec.</p>
                    </div>
                    <div className="team-back-flip-toggle"><span className="icon-close" /></div>
                  </div>
                </BackSide>
              </Flippy>

            </Col>
            <Col className="team-element" lg={3} md={6} sm={6} xs={12}>
              <Flippy ref={(r) => (this.flippyHorizontal_2 = r)}
                flipOnClick={false}>
                <FrontSide animationDuration={flip_speed}>
                  <div className="team-element-front-wrap">
                    <div className="team-wrap">
                      <div className="team-img" style={{ cursor: "pointer" }} onClick={() => this.flippyHorizontal_2.toggle()}><img src={z2} alt="MS" /><div className="team-front-flip-toggle"><Trans>O mnie</Trans> {'>'}</div><div onClick="void(0)" className="team-img-plus icon"></div></div>
                      <div className="team-name"><h2>Imię i Nazwisko</h2></div>
                      <div className="team-position"><h3><Trans i18nKey="Team-position-1">Stanowisko</Trans></h3></div>
                    </div>
                    <div className="team-wrap">
                      <div className="team-separator"></div>
                      <div className="team-email"><a href="mailto:imie.nazwisko@raw-code.pl" target="_top">imie.nazwisko@raw-code.pl</a></div>
                    </div>
                  </div>
                </FrontSide>
                <BackSide animationDuration={flip_speed}>
                  <div className="team-element-back-wrap" style={{ cursor: "pointer" }} onClick={() => this.flippyHorizontal_2.toggle()}>
                    <div className="team-name"><h2>Imię i Nazwisko</h2></div>
                    <div className="team-city"><p>Miasto</p></div>
                    <div className="team-description">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        <p>Diam maecenas sed enim ut sem viverra aliquet eget. Neque viverra justo nec ultrices dui sapien eget mi.</p>
                        <p>Vulputate ut pharetra sit amet aliquam id. Sed adipiscing diam donec adipiscing tristique risus nec.</p>
                    </div>
                    <div className="team-back-flip-toggle"><span className="icon-close" /></div>
                  </div>
                </BackSide>
              </Flippy>

            </Col>
            <Col className="team-element" lg={3} md={6} sm={6} xs={12}>
              <Flippy ref={(r) => (this.flippyHorizontal_3 = r)}
                flipOnClick={false}>
                <FrontSide animationDuration={flip_speed}>
                  <div className="team-element-front-wrap">
                    <div className="team-wrap">
                      <div className="team-img" style={{ cursor: "pointer" }} onClick={() => this.flippyHorizontal_3.toggle()}><img src={z3} alt="MS" /><div className="team-front-flip-toggle"><Trans>O mnie</Trans> {'>'}</div><div onclick="void(0)" className="team-img-plus icon"></div></div>
                      <div className="team-name"><h2>Imię i Nazwisko</h2></div>
                      <div className="team-position"><h3><Trans i18nKey="Team-position-2">Stanowisko</Trans></h3></div>
                    </div>
                    <div className="team-wrap">
                      <div className="team-separator"></div>
                      <div className="team-email"><a href="mailto:imie.nazwisko@raw-code.pl" target="_top">imie.nazwisko@raw-code.pl</a></div>
                    </div>
                  </div>

                </FrontSide>
                <BackSide animationDuration={flip_speed}>
                  <div className="team-element-back-wrap" style={{ cursor: "pointer" }} onClick={() => this.flippyHorizontal_3.toggle()}>
                    <div className="team-name"><h2>Imię i Nazwisko</h2></div>
                    <div className="team-city"><p>Miasto</p></div>
                    <div className="team-description">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        <p>Diam maecenas sed enim ut sem viverra aliquet eget. Neque viverra justo nec ultrices dui sapien eget mi.</p>
                        <p>Vulputate ut pharetra sit amet aliquam id. Sed adipiscing diam donec adipiscing tristique risus nec.</p>
                    </div>
                    <div className="team-back-flip-toggle"><span className="icon-close" /></div>
                  </div>
                </BackSide>
              </Flippy>

            </Col>
            <Col className="team-element" lg={3} md={6} sm={6} xs={12}>
              <Flippy ref={(r) => (this.flippyHorizontal_4 = r)}
                flipOnClick={false}>
                <FrontSide animationDuration={flip_speed}>
                  <div className="team-element-front-wrap">
                    <div className="team-wrap">
                      <div className="team-img" style={{ cursor: "pointer" }} onClick={() => this.flippyHorizontal_4.toggle()}><img src={z4} alt="MS" /><div className="team-front-flip-toggle"><Trans>O mnie</Trans> {'>'}</div><div onclick="void(0)" className="team-img-plus icon"></div></div>
                      <div className="team-name"><h2>Imię i Nazwisko</h2></div>
                      <div className="team-position"><h3><Trans i18nKey="Team-position-2">Stanowisko</Trans></h3></div>
                    </div>
                    <div className="team-wrap">
                      <div className="team-separator"></div>
                      <div className="team-email"><a href="mailto:imie.nazwisko@raw-code.pl" target="_top">imie.nazwisko@raw-code.pl</a></div>
                    </div>
                  </div>

                </FrontSide>
                <BackSide animationDuration={flip_speed}>
                  <div className="team-element-back-wrap" style={{ cursor: "pointer" }} onClick={() => this.flippyHorizontal_4.toggle()}>
                    <div className="team-name"><h2>Imię i Nazwisko</h2></div>
                    <div className="team-city"><p>Miasto</p></div>
                    <div className="team-description">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        <p>Diam maecenas sed enim ut sem viverra aliquet eget. Neque viverra justo nec ultrices dui sapien eget mi.</p>
                        <p>Vulputate ut pharetra sit amet aliquam id. Sed adipiscing diam donec adipiscing tristique risus nec.</p>
                    </div>
                    <div className="team-back-flip-toggle"><span className="icon-close" /></div>

                  </div>
                </BackSide>
              </Flippy>

            </Col>
            <Col className="team-element" lg={3} md={6} sm={6} xs={12}>
              <Flippy ref={(r) => (this.flippyHorizontal_5 = r)}
                flipOnClick={false}>
                <FrontSide animationDuration={flip_speed}>
                  <div className="team-element-front-wrap">
                    <div className="team-wrap">
                      <div className="team-img" style={{ cursor: "pointer" }} onClick={() => this.flippyHorizontal_5.toggle()}><img src={z5} alt="MS" /> <div className="team-front-flip-toggle"><Trans>O mnie</Trans> {'>'}</div><div onclick="void(0)" className="team-img-plus icon"></div></div>
                      <div className="team-name"><h2>Imię i Nazwisko</h2></div>
                      <div className="team-position"><h3><Trans i18nKey="Team-position-2">Stanowisko</Trans></h3></div>
                    </div>
                    <div className="team-wrap">
                      <div className="team-separator"></div>
                      <div className="team-email"><a href="mailto:imie.nazwisko@raw-code.pl" target="_top">imie.nazwisko@raw-code.pl</a></div>
                    </div>
                  </div>

                </FrontSide>
                <BackSide animationDuration={flip_speed}>
                  <div className="team-element-back-wrap" style={{ cursor: "pointer" }} onClick={() => this.flippyHorizontal_5.toggle()}>
                    <div className="team-name"><h2>Imię i Nazwisko</h2></div>
                    <div className="team-city"><p>Miasto</p></div>
                    <div className="team-description">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        <p>Diam maecenas sed enim ut sem viverra aliquet eget. Neque viverra justo nec ultrices dui sapien eget mi.</p>
                        <p>Vulputate ut pharetra sit amet aliquam id. Sed adipiscing diam donec adipiscing tristique risus nec.</p>
                    </div>
                    <div className="team-back-flip-toggle"><span className="icon-close" /></div>
                  </div>
                </BackSide>
              </Flippy>

            </Col>
            <Col className="team-element" lg={3} md={6} sm={6} xs={12}>
              <Flippy ref={(r) => (this.flippyHorizontal_6 = r)}
                flipOnClick={false}>
                <FrontSide animationDuration={flip_speed}>
                  <div className="team-element-front-wrap">
                    <div className="team-wrap">
                      <div className="team-img" style={{ cursor: "pointer" }} onClick={() => this.flippyHorizontal_6.toggle()}><img src={z6} alt="MS" /><div className="team-front-flip-toggle"><Trans>O mnie</Trans> {'>'}</div><div onclick="void(0)" className="team-img-plus icon"></div></div>
                      <div className="team-name"><h2>Imię i Nazwisko</h2></div>
                      <div className="team-position"><h3><Trans i18nKey="Team-position-2">Stanowisko</Trans></h3></div>
                    </div>
                    <div className="team-wrap">
                      <div className="team-separator"></div>
                      <div className="team-email"><a href="mailto:imie.nazwisko@raw-code.pl" target="_top">imie.nazwisko@raw-code.pl</a></div>
                    </div>
                  </div>

                </FrontSide>
                <BackSide animationDuration={flip_speed}>
                  <div className="team-element-back-wrap" style={{ cursor: "pointer" }} onClick={() => this.flippyHorizontal_6.toggle()}>
                    <div className="team-name"><h2>Imię i Nazwisko</h2></div>
                    <div className="team-city"><p>Miasto</p></div>
                    <div className="team-description">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        <p>Diam maecenas sed enim ut sem viverra aliquet eget. Neque viverra justo nec ultrices dui sapien eget mi.</p>
                        <p>Vulputate ut pharetra sit amet aliquam id. Sed adipiscing diam donec adipiscing tristique risus nec.</p>
                    </div>
                    <div className="team-back-flip-toggle"><span className="icon-close" /></div>
                  </div>
                </BackSide>
              </Flippy>

            </Col>
            <Col className="team-element" lg={3} md={6} sm={6} xs={12}>
              <Flippy ref={(r) => (this.flippyHorizontal_8 = r)}
                flipOnClick={false}>
                <FrontSide animationDuration={flip_speed}>
                  <div className="team-element-front-wrap">
                    <div className="team-wrap">
                      <div className="team-img" style={{ cursor: "pointer" }} onClick={() => this.flippyHorizontal_8.toggle()}><img src={z8} alt="Marcin Michalski" /><div className="team-front-flip-toggle"><Trans>O mnie</Trans> {'>'}</div><div onclick="void(0)" className="team-img-plus icon"></div></div>
                      <div className="team-name"><h2>Imię i Nazwisko</h2></div>
                      <div className="team-position"><h3><Trans i18nKey="Team-position-2">Stanowisko</Trans></h3></div>
                    </div>
                    <div className="team-wrap">
                      <div className="team-separator"></div>
                      <div className="team-email"><a href="mailto:imie.nazwisko@raw-code.pl" target="_top">imie.nazwisko@raw-code.pl</a></div>
                    </div>
                  </div>

                </FrontSide>
                <BackSide animationDuration={flip_speed}>
                  <div className="team-element-back-wrap" style={{ cursor: "pointer" }} onClick={() => this.flippyHorizontal_8.toggle()}>
                    <div className="team-name"><h2>Imię i Nazwisko</h2></div>
                    <div className="team-city"><p>Miasto</p></div>
                    <div className="team-description">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        <p>Diam maecenas sed enim ut sem viverra aliquet eget. Neque viverra justo nec ultrices dui sapien eget mi.</p>
                        <p>Vulputate ut pharetra sit amet aliquam id. Sed adipiscing diam donec adipiscing tristique risus nec.</p>
                    </div>
                    <div className="team-back-flip-toggle"><span className="icon-close" /></div>
                  </div>

                </BackSide>
              </Flippy>

            </Col>
            <Col className="team-element" lg={3} md={6} sm={6} xs={12}>
              <Flippy ref={(r) => (this.flippyHorizontal_7 = r)}
                flipOnClick={false}>
                <FrontSide animationDuration={flip_speed}>
                  <div className="team-element-front-wrap">
                    <div className="team-wrap">
                      <div className="team-img" style={{ cursor: "pointer" }} onClick={() => this.flippyHorizontal_7.toggle()}><img src={z7} alt="MS" /><div className="team-front-flip-toggle"><Trans>O mnie</Trans> {'>'}</div><div onclick="void(0)" className="team-img-plus icon"></div></div>
                      <div className="team-name"><h2>Imię i Nazwisko</h2></div>
                      <div className="team-position"><h3><Trans i18nKey="Team-position-3">Stanowisko</Trans></h3></div>
                    </div>
                    <div className="team-wrap">
                      <div className="team-separator"></div>
                      <div className="team-email"><a href="mailto:imie.nazwisko@raw-code.pl" target="_top">imie.nazwisko@raw-code.pl</a></div>
                    </div>
                  </div>

                </FrontSide>
                <BackSide animationDuration={flip_speed}>
                  <div className="team-element-back-wrap" style={{ cursor: "pointer" }} onClick={() => this.flippyHorizontal_7.toggle()}>
                    <div className="team-name"><h2>Imię i Nazwisko</h2></div>
                    <div className="team-city"><p>Miasto</p></div>
                    <div className="team-description">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        <p>Diam maecenas sed enim ut sem viverra aliquet eget. Neque viverra justo nec ultrices dui sapien eget mi.</p>
                        <p>Vulputate ut pharetra sit amet aliquam id. Sed adipiscing diam donec adipiscing tristique risus nec.</p>
                    </div>
                    <div className="team-back-flip-toggle"><span className="icon-close" /></div>
                  </div>

                </BackSide>
              </Flippy>

            </Col>
          </Row>

          {/* Złoty separator wyświetlany tylko na użądzeniach mobilnych */}
          <Row className="padding-top-sep show-on-mobile">
            <div className="little-gold-separator"></div>
          </Row>

        </Container>
      </section>
    );
  }
}

export default withTranslation(["translations"])(Home);
