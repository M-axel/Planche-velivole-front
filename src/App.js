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

const App = () => {
  return (
    <Router>
      {/* A l'interieur d'un switch, une seule Route est render */}
      <Switch>
        {/* Ce qui se trouve dans la balise Route est render
    lorsque l'URL correspond au paramètre 'path' défini.
    Sans 'exact' /DKJDNK/DJD passerait dans cette route*/}
        <Route path="/" exact="true">
          <Planche />
        </Route>
        <Route path="/archive" exact="true">
          <Archive />
        </Route>
        {/* Si aucune route n'est render, redirect affiche /*/}
        <Redirect to="/" />
      </Switch>
    </Router>
  );
};

export default App;
