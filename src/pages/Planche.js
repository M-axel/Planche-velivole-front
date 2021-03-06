import React from "react";

import Tableau from "../components/Planche/Tableau";

const Planche = (props) => {

  if(props.length === 0){
    console.log("On veut afficher une planche sans sa date");
  }
  //Dummy
  const VOL = [
    {
      id: new Date("2021-1-1"),
      avion: { immat: "ZV", pilote: "LRC", code: "3208" },
      planeur: { type: "LS6", immat1: "D", immat2: "G" },
      pilotePlaneur: { nom: "DEWEZ", code: "544" },
      placeArriere: { nom: "", code: "" },
      remorquage: { heure: "11", minute: "49", temps: "6" },
      atterrissage: { heure: "16", minute: "54" },
      parachute: "22",
    },
    {
      id: new Date("2021-3-6"),
      avion: { immat: "ZV", pilote: "LRC", code: "3208" },
      planeur: { type: "LS6", immat1: "D", immat2: "G" },
      pilotePlaneur: { nom: "DEWEZ", code: "544" },
      placeArriere: { nom: "", code: "" },
      remorquage: { heure: "11", minute: "49", temps: "6" },
      atterrissage: { heure: "16", minute: "54" },
      parachute: "22",
    }
  ];
  
  // La planche à afficher (car id = date)
  const plancheID = props.date;
  // Pour etre certain de travailler uniquement sur YYYY-MM-DD
  plancheID.setHours(0,0,0,0);

  // getTime sinon la comparaison ne se valide jamais
  const plancheAAfficher = VOL.filter( vol => vol.id.getTime() === plancheID.getTime());

  return <Tableau vol={plancheAAfficher} />;
};

export default Planche;
