import React, { Component, useState } from "react";
import { withTranslation, Trans } from "react-i18next";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

/* Generowanie formularza kontakowego */
class ContactForm extends Component {

  /* Definiowanie zmiennych stanu formularza */
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      tel: '',
      message: '',
      emailstatus: '',
      emailtext: '',
      emailclass: 'clear '
    }
  }

  /* Komunikacja z API do wysyłania maili */
  handleSubmit(e) {
    e.preventDefault();
    var xhr = new XMLHttpRequest(); /* Tworzenie nowej zmiennej żądania http */
    xhr.addEventListener('load', () => {

      /* Przypisanie statusu zwróconego z API */
      this.setState({
        emailstatus: xhr.responseText
      })

      /* Sprawdzanie czy mail został poprawnie wysłany */
      if (this.state.emailstatus === "success") {

        /* Jeśli tak, to czyści formularz kontaktowy oraz wysyła treść komunikatu o prawdiłowym wysłaniu maila */
        this.setState({
          name: '',
          email: '',
          tel: '',
          message: '',
          isChecked: false,
          emailtext: "Twoja wiadomość została wysłana. Dziękujemy!", /* Treść poprawnego wysłania formularza */
          emailclass: "clear success" /* Przypisanie klasy stylu */
        })

        /* Komunikat wysyłki formularza znika po ustalonym czasie */
        setTimeout(() => {
          this.setState({
            emailtext: "", /* Czyszczenie treści komunikatu */
            emailclass: "clear" /* Zmiana klasy stylu */
          });
        }, 5000); /* Czas wyświetlania się komunikatu (5000ms) */
      } else if (this.state.emailstatus === "fail") {

        /* Jeśli nie, to wyświetla komunikat o błędzie */
        this.setState({
          emailtext: "Błąd. Nie udało się wysłać twojej wiadmości.", /* Treść błędu przy wysłaniu formularza */
          emailclass: "clear fail" /* Przypisanie klasy stylu */
        })

        /* Komunikat błedu wysyłki formularza znika po ustalonym czasie */
        setTimeout(() => {
          this.setState({
            emailtext: "", /* Czyszczenie treści komunikatu */
            emailclass: "clear" /* Zmiana klasy stylu */
          });
        }, 5000); /* Czas wyświetlania się komunikatu (5000ms) */
      }
    });

    /* Przesłanie danych z formularza do API */
    xhr.open('GET', `../api/index.php?from=${this.state.email}&name=${this.state.name}&message=${this.state.message}&tel=${this.state.tel}`);

    /* Wysyłka maila */
    xhr.send();
  }

  render() {
    /*  */
    const { t } = this.props;
    const no_style = {
      display: 'none',
    };
    return (
      <Row className="ContactForm anime">
        <Col lg={12} className="Form-container">
          <Row>
            <Col lg={12}><h2><Trans>Formularz kontaktowy</Trans></h2></Col>
          </Row>
          <form id="contact-form" onSubmit={this.handleSubmit.bind(this)} method="POST" autocomplete="off">
            <input autocomplete="false" name="hidden" type="text" style={no_style} /> {/* Niewidoczny element wymuszający brak podświetlania się pól formularza */}
            <Row>
              <Col lg={6}>
                <Row><label for="name" className="no_show">{t("Imię (pole wymagane)")}</label><Col lg={12}><input placeholder={t("Imię (pole wymagane)")} required id="name" type="text" value={this.state.name} onChange={this.onNameChange.bind(this)} /></Col></Row>       
                <Row><label for="email" className="no_show">{t("adres e-mail (pole wymagane)")}</label><Col lg={12}><input placeholder={t("adres e-mail (pole wymagane)")} required id="email" type="email" aria-describedby="emailHelp" value={this.state.email} onChange={this.onEmailChange.bind(this)} /></Col></Row>
                <Row><label for="tel" className="no_show">{t("numer telefonu (pole wymagane)")}</label><Col lg={12}><input placeholder={t("numer telefonu (pole wymagane)")} required id="tel" type="tel" value={this.state.tel} onChange={this.onTelChange.bind(this)} /></Col></Row>
              </Col>
              <Col lg={6}>
                <Row className="Form-textarea"><Col lg={12}><label for="message" className="no_show">{t("Treść wiadomości (pole wymagane)")}</label><textarea placeholder={t("Treść wiadomości (pole wymagane)")} required id="message" value={this.state.message} onChange={this.onMessageChange.bind(this)} /></Col></Row></Col>
            </Row>
            <Row>
              <Col lg={12}>
                <div className={this.state.emailclass ? this.state.emailclass : null}><p><Trans>{this.state.emailtext ? this.state.emailtext : null}</Trans></p></div> {/* Element wyświetlający komunikaty przy wysyłaniu formularza */}
              </Col>
            </Row>
            <Row>
              <Col lg={12} className="Form-checkbox"><p className="box-container"><Trans i18nKey="Contact-apt">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Diam maecenas sed enim ut sem viverra aliquet eget. Neque viverra justo nec ultrices dui sapien eget mi. Vulputate ut pharetra sit amet aliquam id. Sed adipiscing diam donec adipiscing tristique risus nec. Pellentesque sit amet porttitor eget dolor morbi non. <Link to="/polityka_prywatnosci">Polityka Prywatności</Link>.</Trans></p></Col>
            </Row>
            <Row>
              <Col lg={12} className="Form-button"><button type="submit" className="contact-form-submit"><Trans>Wyślij</Trans></button></Col>
            </Row>
          </form>
        </Col>
      </Row>
    );
  }

  /* Sprawdzanie zmien w polach formularza */
  onNameChange(event) {
    this.setState({ name: event.target.value })
  }
  onEmailChange(event) {
    this.setState({ email: event.target.value })
  }
  onTelChange(event) {
    this.setState({ tel: event.target.value })
  }
  onMessageChange(event) {
    this.setState({ message: event.target.value })
  }

}

export default withTranslation("translations")(ContactForm);