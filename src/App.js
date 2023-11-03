import React, { Component } from "react";
import { Route, HashRouter, Switch, BrowserRouter } from "react-router-dom";
import { Container } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import SimpleReactLightbox from "simple-react-lightbox";
import ScrollToTop from "./components/ScrollToTop";

/* Import styli */
import './css/style.scss';

/* Import stron */
import Home from "./components/Home";
import Polityka from "./components/Polityka";
import Footer from "./components/Footer";
import NotFoundPage from "./components/NotFoundPage";

class App extends Component {
  render() {
    return (
    
      <BrowserRouter>

        {/* Włączenie możliwości powiększania zdjęć na wszystkich stronach */}
        <SimpleReactLightbox>

          <div className="App">
            <Container fluid>

              {/* Powrót na górę strony po jej odświeżeniu */}
              <ScrollToTop />
              <Switch>
                {/* Odnośnik do strony głównej */}
                <Route exact path="/" component={Home} />

                {/* Odnośnik do polityki prywatności */}
                <Route path="/polityka_prywatnosci" component={Polityka} />

                {/* Jeżeli urzytkownik wpisze adres niepasujący do powyższych stron, to wyświetli się strona błędu 404 */}
                <Route component={NotFoundPage} />

              </Switch>

              {/* Załadowanie stopki */}
              <Footer />
            </Container>
          </div>
        </SimpleReactLightbox>
      </BrowserRouter>
    );
  }

}

export default App;
