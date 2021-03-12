import React from "react";

import Tableau from "../components/Planche/Tableau";

const Planche = props => {

  if (props.length === 0) {
    window.alert("On veut afficher une planche sans sa date");
  } else if(props.length > 1){
    window.alert("Trop de planches données en props");
  }

  //console.log("Date dans planche" + props.date)
  //Dummy
  const DUMMY_DATA = [
    {
      plancheID: new Date(2021,0,1),
      data: [
        {
          volID: "1",
          avion: { immat: "ZV", pilote: "LRC", code: "3208" },
          planeur: { type: "LS6", immat1: "D", immat2: "G" },
          pilotePlaneur: { nom: "DEWEZ", code: "544" },
          placeArriere: { nom: "", code: "" },
          remorquage: { heure: "11", minute: "49", temps: "6" },
          atterrissage: { heure: "16", minute: "54" },
          parachute: "22",
        },
        {
          volID: "2",
          avion: { immat: "ZM", pilote: "LRC", code: "3208" },
          planeur: { type: "LS6", immat1: "D", immat2: "G" },
          pilotePlaneur: { nom: "DEWEZ", code: "544" },
          placeArriere: { nom: "", code: "" },
          remorquage: { heure: "11", minute: "49", temps: "6" },
          atterrissage: { heure: "16", minute: "54" },
          parachute: "22",
        },
      ],
    },
    {
      plancheID: new Date(2021,0,2),
      data: [
        {
          volID: "3",
          avion: { immat: "ZV", pilote: "LRC", code: "3208" },
          planeur: { type: "LS6", immat1: "D", immat2: "G" },
          pilotePlaneur: { nom: "DEWEZ", code: "544" },
          placeArriere: { nom: "", code: "" },
          remorquage: { heure: "11", minute: "49", temps: "6" },
          atterrissage: { heure: "16", minute: "54" },
          parachute: "22",
        },
        {
          volID: "4",
          avion: { immat: "ZV", pilote: "LRC", code: "3208" },
          planeur: { type: "LS6", immat1: "D", immat2: "G" },
          pilotePlaneur: { nom: "MAISSA", code: "544" },
          placeArriere: { nom: "", code: "" },
          remorquage: { heure: "11", minute: "49", temps: "6" },
          atterrissage: { heure: "16", minute: "54" },
          parachute: "22",
        },
      ],
    },
    {
      plancheID: new Date(2021,2,12),
      data: [
        {
          volID: "5",
          avion: { immat: "ZV", pilote: "LRC", code: "3208" },
          planeur: { type: "LS6", immat1: "D", immat2: "G" },
          pilotePlaneur: { nom: "DEWEZ", code: "544" },
          placeArriere: { nom: "", code: "" },
          remorquage: { heure: "11", minute: "49", temps: "6" },
          atterrissage: { heure: "16", minute: "54" },
          parachute: "22",
        },
        {
          volID: "6",
          avion: { immat: "ZV", pilote: "LRC", code: "3208" },
          planeur: { type: "LS6", immat1: "D", immat2: "G" },
          pilotePlaneur: { nom: "DEWEZ", code: "544" },
          placeArriere: { nom: "", code: "" },
          remorquage: { heure: "11", minute: "49", temps: "6" },
          atterrissage: { heure: "16", minute: "54" },
          parachute: "22",
        },
      ],
    }
  ];

  // La planche à afficher (car id = date)
  const plancheID = props.date;
  // Pour etre certain de travailler uniquement sur YYYY-MM-DD
  plancheID.setHours(0, 0, 0, 0);

  //console.log("PlancheID: "+plancheID);

  // On va itérer sur les données à la recherche de la bonne planche
  // getTime sinon la comparaison ne se valide jamais
  const plancheAAfficher = DUMMY_DATA.filter(
    planche => planche.plancheID.getTime() === plancheID.getTime()
  );

  //console.log(plancheAAfficher[0].plancheID);
    // plancheAAfficher est un array dont la taille est forcément de 1
    // (une seule planche par date)
  return <Tableau planche={plancheAAfficher[0]} />;
};

export default Planche;
