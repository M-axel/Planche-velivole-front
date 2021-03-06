import React from "react";
// Permet de parser l'url
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";

import Planche from "./pages/Planche";
import Archive from "./pages/Archive";
import Navigation from "./components/Navigation/Navigation";
import Authentification from "./pages/Authentification";

const App = () => {
  return (
    <Router>
      <Navigation />
      {/* A l'interieur d'un switch, une seule Route est render */}
      <main>
      <Switch>
        {/* Ce qui se trouve dans la balise Route est render
    lorsque l'URL correspond au paramètre 'path' défini.
    Sans 'exact' /DKJDNK/DJD passerait dans cette route*/}
        <Route path="/" exact>
          <Planche />
        </Route>
        <Route path="/archive" exact>
          <Archive />
        </Route>
        <Route path="/authentification" exact>
          <Authentification />
        </Route>
        {/* Si aucune route n'est render, redirect affiche /*/}
        <Redirect to="/" />
      </Switch>
      </main>
    </Router>
  );
};

export default App;
