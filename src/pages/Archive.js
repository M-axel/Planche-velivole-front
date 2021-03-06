import React, { useState, useReducer } from "react";

import Calendrier from "../components/Archive/Calendrier";

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
  // Il nous faut un état pour savoir si on est en selection de l'archive ou consultation
  // Pour ça on va utiliser useReducer puisque les deux états sont liés
  const [state, dispatch] = useReducer(reducer, "calendrier");

  // useState définit la valeur de base (aujourd'hui)
  // Premier paramètre est l'état et le deuxième une fonction de MAJ
  const [dateState, setDateState] = useState(new Date());

  const clickDayHandler = (date) => {
    setDateState(date);
    dispatch({ type: "affichePlanche" });
    console.log(state);
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
        <h1>Planche</h1>
        <button onClick={() => dispatch({ type: "afficheCalendrier" })}>
          Choisir une autre planche
        </button>
      </React.Fragment>
    );
  }
};

export default Archive;
