import React from "react";
import ReactDOM from "react-dom"; // Pour le portal

import "./SubmitButton.css";

const SubmitButton = (props) => {

  const submitHandler = () => {
    console.log("Nouvelle ligne");

    // Je n'ai pas utilisé de balise <form>, je récupère donc la valeur avec l'id de la case input
    const ligne = {
      volID: "-1",
      avion: {
        immat: document.getElementById("immatAvion").value,
        pilote: document.getElementById("nomPiloteAvion").value,
        code: document.getElementById("codePiloteAvion").value,
      },
      planeur: {
        type: document.getElementById("typePlaneur").value,
        immat1: document.getElementById("immat1Planeur").value,
        immat2: document.getElementById("immat2Planeur").value,
      },
      pilotePlaneur: {
        nom: document.getElementById("nomPilotePlaneur").value,
        code: document.getElementById("codePilotePlaneur").value,
      },
      placeArriere: {
        nom: document.getElementById("nomPlaceArriere").value,
        code: document.getElementById("codePlaceArriere").value,
      },
      remorquage: {
        heure: document.getElementById("decollageHeureRemorquage").value,
        minute: document.getElementById("decollageMinuteRemorquage").value,
        temps: document.getElementById("tempsRemorquage").value,
      },
      atterrissage: {
        heure: document.getElementById("atterrissageHeurePlaneur").value,
        minute: document.getElementById("atterrissageMinutePlaneur").value,
      },
      parachute: document.getElementById("numeroParachute").value,
    };

    //console.log(ligne.avion.immat, ligne.avion.pilote, ligne.avion.code);

    /* Puis on ajoute notre ligne à notre base de donnée.
    * Pour ce faire, on utilise la méthode que Planche.js nous a donnée
    */

    //TODO:

    props.addLigne(new Date(2021, 2, 15), ligne);

    props.dispatch({type: 'consultation'});
  };


  const submitButton = <button onClick={submitHandler} >Submit</button>;

  // Je ne veux pas que le bouton soit render dans mon table puisque ce n'est pas autorisé
  // Il faut donc lui indiquer un autre élément (DOM) auquel se grefer.
  // J'ai crée un div id='bottom' pour l'occasion, pas très élégant

  return ReactDOM.createPortal(submitButton, document.getElementById("bottom"));
};

export default SubmitButton;
