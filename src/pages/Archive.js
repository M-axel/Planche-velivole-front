import React, { useState, useReducer } from "react";
import { useParams } from "react-router-dom"; // Pour récupérer les éléments de l'url

import Calendrier from "../components/Archive/Calendrier";
import Planche from "./Planche";
import './Archive.css';

const reducer = (state, action) => {
  switch (action.type) {
    case "afficheCalendrier":
      state = "calendrier";
      return state;
    case "affichePlanche":
      state = "planche";
      return state;
    default:
      return state; // On retourne l'état actuel
  }
};

const Archive = () => {
// On regarde si il y a quelque chose dans l'url type "annee/mois/jour" au quel cas on l'affiche
const dateULR = {
  annee: useParams().annee,
  mois: useParams().mois,
  jour: useParams().jour,
};

  // On converti ça en une date format ISO (ex: 2010-01-27)
  const dateURLISO = new Date(
    dateULR.annee + "-" + dateULR.mois + "-" + dateULR.jour
  );

  // Il nous faut un état pour savoir si on est en selection de l'archive ou consultation
  // Pour ça on va utiliser useReducer puisque les deux états sont liés
  const [state, dispatch] = useReducer(reducer, "calendrier");

  // useState définit la valeur de base (date de l'url OU aujourd'hui si date URL pas définit)
  // Premier paramètre est l'état et le deuxième une fonction de MAJ
  const [dateState, setDateState] = useState( dateURLISO || new Date());

  //console.log(dateState);

  const clickDayHandler = (date) => {
    setDateState(date);
    dispatch({ type: "affichePlanche" });
    //console.log(state);
  };


  if (state === "calendrier") {
    return (
      <div className="Calendrier">
        {/*Le mecanisme de state se trouve ici, mais l'event est déclanché dans Calendar
          donc on passe à notre component de quoi rappeler */}
        <Calendrier callback={clickDayHandler} date={dateState} />
      </div>
    );
  } else if (state === "planche") {
    return (
      <React.Fragment>
        <h1 className="titreArchive">
          Archive du {dateState.getDay()}/{dateState.getMonth()}/{dateState.getFullYear()}
          </h1>
          <button className="retourCalendrier" onClick={() => dispatch({ type: "afficheCalendrier" })}>
          &lt; Retour calendrier
        </button>
        {/** On passe la date en props à Planche */}
          <Planche date={dateState} />
      </React.Fragment>
    );
  }
};

export default Archive;
