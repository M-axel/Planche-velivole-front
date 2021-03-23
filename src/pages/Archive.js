import React, { useReducer } from "react";
import { useParams, useHistory, Link } from "react-router-dom"; // Pour récupérer les éléments de l'url

import Calendrier from "../components/Archive/Calendrier";
import Planche from "./Planche";
import "./Archive.css";

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
  const history = useHistory();
  // Il nous faut un état pour savoir si on est en selection de l'archive ou consultation
  // Pour ça on va utiliser useReducer puisque les deux états sont liés
  const [state, dispatch] = useReducer(reducer, 'calendrier');

  // On recupère ce qui se trouve dans l'url
  const dateULR = {
    annee: useParams().annee,
    mois: useParams().mois,
    jour: useParams().jour,
  };

  // Si on entre une URL à la main, on tombe directement sur la planche. Pas obligé de passer par le calendrier
  if(dateULR.annee && dateULR.mois && dateULR.jour && (state === 'calendrier')){
    dispatch({ type: "affichePlanche" });
  }

  //console.log("Date URL:" + dateULR.annee + "/" + dateULR.mois+"/"+dateULR.jour);

  // On converti ça en une date format ISO (ex: 2010,01,27)
  let dateURLISO = new Date(
    dateULR.annee, dateULR.mois -1, + dateULR.jour
  );
  // Attention parce qu'ici, le mois est à nouveau 0 pour janvier

  //console.log("Date ISO :" + dateURLISO);

  const clickDayHandler = (date) => {
    //console.log("Calendar envoie : "+date + " soit mois :"+ date.getMonth());
    
    // Si une date est cliquée sur le calendrier, alors on modifie notre URL
    // et au refresh, cette url sera capturée par useParams() et donc dans dateURL
    history.push(
      "/archive/" +
        date.getFullYear() +
        "/" +
        (date.getMonth() +1) + // +1 car getMonth envoie 0 pour janvier
        "/" +
        date.getDate()
    );

    dispatch({ type: "affichePlanche" });
    //console.log(state);
  };

  if (state === "calendrier") {
    return (
      <div className="Calendrier">
        {/*Le mecanisme de state se trouve ici, mais l'event est déclanché dans Calendar
          donc on passe à notre component de quoi rappeler */}
        <Calendrier callback={clickDayHandler} date={dateURLISO} />
      </div>
    );
  } else if (state === "planche") {
    return (
      <React.Fragment>
        <h1 className="titreArchive">
          Archive du {dateURLISO.getDate()}/{dateURLISO.getMonth()+1}/
          {dateURLISO.getFullYear()}
        </h1>
        <div
        className="retourCalendrier">
        <Link
          to="/archive"
          onClick={() => dispatch({ type: "afficheCalendrier" })}
        
        ><button>
        &lt; Retour calendrier
        </button>
        </Link>
        </div>
        {/** On passe la date en props à Planche*/}
        <Planche date={dateURLISO} archive={true} />
      </React.Fragment>
    );
  }
};

export default Archive;
