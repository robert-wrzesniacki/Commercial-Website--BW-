import { useEffect } from "react";
import { withRouter } from 'react-router-dom';

/* Funkcja obserwuje czy przejścia użytkownika między podstonami
 i w razie wykrycia akcji przechodzi na górę strony */

function ScrollToTop({ history }) {
  useEffect(() => {
    const unlisten = history.listen(() => {
      window.scrollTo(0, 0);
      document.body.scrollTop = 0;
      document.getElementById('root').scrollTop = 0;
    });
    return () => {
      unlisten();
    }
  }, []);

  return (null);
}

export default withRouter(ScrollToTop);