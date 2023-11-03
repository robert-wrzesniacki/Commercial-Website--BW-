/*-------------SCROLL SPY-------------*/
export function scrollSpy() {
  const sectionsIDs = Array.from(document.querySelectorAll(".scrollspy"));
  const windowHeight =
  window.innerHeight ||
  document.documentElement.clientHeight ||
  document.getElementsByTagName("body")[0].clientHeight;
  let sectionsOffsets = [];

  sectionsIDs.forEach(e => (sectionsOffsets[e.id] = e.offsetTop));

    var scrollPosition =
      document.documentElement.scrollTop || document.body.scrollTop ;

    for (const cur of sectionsIDs) {
      if (sectionsOffsets[cur.id] <= (scrollPosition + 200)) {
        Array.from(document.querySelectorAll(".scroll")).forEach(e =>
          e.classList.remove("active-link")
        );
        Array.from(
          document.querySelectorAll(`a[data-link*= ${cur.id}]`)
        ).forEach(e => e.classList.add("active-link"));
      } else if (sectionsOffsets[cur.id] <= scrollPosition + (windowHeight * 0.75)) {
        Array.from(document.querySelectorAll(`.scrollspy#${cur.id}`)).forEach(
          e => e.classList.add("animated")
        );
      }

      /* Sprawdza pozycje na stronie i pokazuje wszystkie elementy ponad pozycją */
      if (sectionsOffsets[cur.id] <= scrollPosition + (windowHeight * 0.75)) {
        Array.from(document.querySelectorAll(`.scrollspy#${cur.id}`)).forEach(
          e => e.classList.add("animated")
        );
        }
    }


}
/*-------------SMOOTH SCROLL-------------*/

export function scrollIt(
  destination, 
  duration = 200, /* Czas przejścia */
  easing = "linear", /* Wybrany rodzaj animacji scrolowania */
  callback
) {
  /* Definicje różnych rodzajów animacji scrolowania */
  const easings = {
    linear(t) {
      return t;
    },
    easeInQuad(t) {
      return t * t;
    },
    easeOutQuad(t) {
      return t * (2 - t);
    },
    easeInOutQuad(t) {
      return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
    },
    easeInCubic(t) {
      return t * t * t;
    },
    easeOutCubic(t) {
      return --t * t * t + 1;
    },
    easeInOutCubic(t) {
      return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
    },
    easeInQuart(t) {
      return t * t * t * t;
    },
    easeOutQuart(t) {
      return 1 - --t * t * t * t;
    },
    easeInOutQuart(t) {
      return t < 0.5 ? 8 * t * t * t * t : 1 - 8 * --t * t * t * t;
    },
    easeInQuint(t) {
      return t * t * t * t * t;
    },
    easeOutQuint(t) {
      return 1 + --t * t * t * t * t;
    },
    easeInOutQuint(t) {
      return t < 0.5 ? 16 * t * t * t * t * t : 1 + 16 * --t * t * t * t * t;
    }
  };


  const start = window.pageYOffset; /* Pobranie aktyalnej pozycji */
  const startTime = "now" in window.performance ? performance.now() : new Date().getTime(); /* Pobranie aktualnego czasu (początek animacji) */

  /* Przypisanie wysokości strony w zależności od tego, która wartość wysokości jest największa (ekran, przeglądarka, strona, treść) */
  const documentHeight = Math.max(
    document.body.scrollHeight,
    document.body.offsetHeight,
    document.documentElement.clientHeight,
    document.documentElement.scrollHeight,
    document.documentElement.offsetHeight
  );

  /* Przypisanie wysokości okna */
  const windowHeight =
    window.innerHeight ||
    document.documentElement.clientHeight ||
    document.getElementsByTagName("body")[0].clientHeight;

  /* Przypisanie pozycji elementu, do którego chcemy się przenieść */
  const destinationOffset =
    typeof destination === "number" ? destination : destination.offsetTop - 80;   /* ustawiamy się o 80px wyżej niż element (Wysokość fixed menu) */

  /* Przypisanie zaokrąglonej różnicy między pozycją aktualną a docelową */
  const destinationOffsetToScroll = Math.round(
    documentHeight - destinationOffset < windowHeight
      ? documentHeight - windowHeight
      : destinationOffset
  );

  /* Jeżeli przeglądarka ma wyłączoną animację to od razu przenosi do miejsca docelowego */
  if ("requestAnimationFrame" in window === false) {
    window.scroll(0, destinationOffsetToScroll);
    if (callback) {
      callback();
    }
    return;
  }

  function scroll() {
    const now = "now" in window.performance ? performance.now() : new Date().getTime(); /* Aktualny czas*/
    const time = Math.min(1, (now - startTime) / duration); /* Przypisanie pozycji elementu, do którego chcemy się przenieść */
    const timeFunction = easings[easing](time); /* Przejście w czasie */
    
    /* Wykonanie przenisienia do punktu docelowego */
    window.scroll(
      0,
      Math.ceil(timeFunction * (destinationOffsetToScroll - start) + start)
    );

    /* 
        Jeżeli aktualna pozycja jest równa pozycji docelowej, to funkcja kończy działanie 
        Ważne: Zaokrąglenie naprawia błąd pętli i braku możliwości dalszego przeglądania strony na niektórych przeglądarkach.  
    */
    if (Math.round(window.pageYOffset) === destinationOffsetToScroll) { 
      if (callback) {
        callback();
      }
      return;
    }

    requestAnimationFrame(scroll);
  }

  scroll();
}

