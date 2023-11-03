import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { withTranslation, Trans } from "react-i18next";

/* Import funkcji scrolowania */
import { scrollIt, scrollSpy } from "./scripts/scroll.js";

/* Import logo dla menu */
import logo from ".././images/logoBW_gold.svg";


/* Generowanie nagłówka z menu na podstronach */
class HeaderP extends Component {
  render() {
    return (
      <div>
        {/* Menu */}
        <div className="header-container">
          <header className="main-header">
            <div className="container">
              <div className="flex-wrap">
                <NavLink exact to="/">
                  <img src={logo} className="logo" alt="logo" />
                </NavLink>
                <div className="burger-menu">
                  <div className="hamburger hamburger--squeeze">
                    <div className="hamburger-box">
                      <div className="hamburger-inner"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mobile-menu">
                <nav className="main-menu">
                  <NavLink exact to="/">
                    <Trans>Strona Główna</Trans>
                  </NavLink>
                  {/*   <a className="lang"></a> */}
                </nav>
              </div>
            </div>
          </header></div>

        {/* Fixec Menu */}
        <div className="header-container-fixed">
          <header className="main-header-fixed">
            <div className="container">
              <a className="scroll logo" data-link="#page-top">
                <img src={logo} className="logo" alt="logo" />
              </a>
              <nav className="main-menu">
                <a className="scroll" data-link="#about">
                  <Trans>O nas</Trans>
                </a>
                <a className="scroll" data-link="#investments">
                  <Trans>Investycje</Trans>
                </a>
                <a className="scroll" data-link="#credit">
                  <Trans>Kredyty</Trans>
                </a>
                <a className="scroll" data-link="#team">
                  <Trans>Nasz Zespół</Trans>
                </a>
                <a className="scroll" data-link="#contact">
                  <Trans>Kontakt</Trans>
                </a>
                {/* <a className="lang-fix"></a> */}
              </nav>
            </div>
          </header></div>



      </div>
    );
  }

  componentDidMount() {

    /* Struktura odpowiadająca za zmianę języka po kliknięciu w przycisk menu i fixed menu */

    /*     
        const { i18n } = this.props;
        const btn = document.querySelector(".lang");
        const btn_fix = document.querySelector(".lang-fix");
  
        if (i18n.language === "en") {
          btn_fix.textContent = "pl";
          btn.textContent = "pl";
        } else {
          btn_fix.textContent = "en";
          btn.textContent = "en";
        }
        document.querySelector(".lang").addEventListener("click", () => {
          if (i18n.language !== "en") {
            i18n.changeLanguage("en");
            btn_fix.textContent = "pl";
            btn.textContent = "pl";
          } else {
            i18n.changeLanguage("pl");
            btn_fix.textContent = "en";
            btn.textContent = "en";
          }
        });
        document.querySelector(".lang-fix").addEventListener("click", () => {
          if (i18n.language !== "en") {
            i18n.changeLanguage("en");
            btn_fix.textContent = "pl";
            btn.textContent = "pl";
          } else {
            i18n.changeLanguage("pl");
            btn_fix.textContent = "en";
            btn.textContent = "en";
          }
        }); 
     */


    window.addEventListener('scroll', scrollSpy);

    /* Przenoszenie do odpowiedniej sekcji po wybraniu jej z menu  */
    Array.from(document.querySelectorAll(".scroll")).forEach(e => {
      e.addEventListener("click", () => {
        scrollIt(
          document.querySelector(`#${e.dataset.link.split("#")[1]}`),
          1300,
          "easeInOutQuint"
        );
      });
    });

    /* Zanikanie Menu i pojawienie się fixed menu po zejściu poniżej 400px */
    window.addEventListener("scroll", function () {
      const scrollPosition = document.documentElement.scrollTop || document.body.scrollTop;
      const menu = document.querySelector(".main-header");
      const menu_cointener = document.querySelector(".header-container");
      const menu_fixed = document.querySelector(".main-header-fixed");
      const menu_con_fixed = document.querySelector(".header-container-fixed");


      if (scrollPosition > 400) {
        menu.classList.add("moving");
        menu_cointener.classList.add("moving");
        menu_fixed.classList.add("moving");
        menu_con_fixed.classList.add("moving");

      } else if (scrollPosition < 400) {
        menu.classList.remove("moving");
        menu_cointener.classList.remove("moving");
        menu_fixed.classList.remove("moving");
        menu_con_fixed.classList.remove("moving");

      }
    });

    /* Zmiana wyglądu przycisku hamburger menu po jego kliknięciu */
    const hamburger = document.querySelector(".hamburger");
    const mobile_menu = document.querySelector(".mobile-menu")
    document.querySelector(".hamburger").addEventListener("click", () => {
      hamburger.classList.toggle("is-active");
      mobile_menu.classList.toggle("active");
    });

    /* Dla rozdzielczości powyżej 767px (przy skalowaniu okna) zostają włączone animacje na stronie i znika hamburger menu */
    const animation_enable = document.querySelectorAll(".moving-show");
    window.addEventListener('resize', function (event) {
      if (window.innerWidth >= 767) {
        hamburger.classList.remove("is-active");
        mobile_menu.classList.remove("active");
        var i;
        for (i = 0; i < animation_enable.length; i++) {
          animation_enable[i].classList.add("enable");
        }
      } else {
        for (i = 0; i < animation_enable.length; i++) {
          animation_enable[i].classList.remove("enable");
        }
      }
    });

    /* Dla rozdzielczości powyżej 767px zostają włączone animacje na stronie i znika hamburger menu */
    if (window.innerWidth >= 767) {
      hamburger.classList.remove("is-active");
      mobile_menu.classList.remove("active");
      var i;
      for (i = 0; i < animation_enable.length; i++) {
        animation_enable[i].classList.add("enable");
      }
    } else {
      for (i = 0; i < animation_enable.length; i++) {
        animation_enable[i].classList.remove("enable");
      }
    }
  }
}


export default withTranslation("translations")(HeaderP);