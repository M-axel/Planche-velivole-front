import React,{ useReducer } from "react";

import Tableau from "../components/Planche/Tableau";
import Controls from "../components/Planche/Form/Controls";

const reducer = (state, action) => {
  switch (action.type) {
    case 'consultation':
      state = 'consultation';
      return state;
    case 'ajouter':
      state = 'ajouter';
      console.log('On ajoute');
      return state;
    case 'modifier':
      state = 'modifier';
      return state;
    default:
      return state; // On retourne l'état actuel
  }
};

const Planche = (props) => {
  if (props.length === 0) {
    window.alert("On veut afficher une planche sans sa date");
  } else if (props.length > 1) {
    window.alert("Trop de planches données en props");
  }

  //console.log("Date dans planche" + props.date)

  // On utilise un etat : consultation, ajout ou modification
  const [state, dispatch] = useReducer(reducer, 'consultation');

  //Dummy
  const DUMMY_DATA = [
    {
      plancheID: new Date(2021, 0, 1),
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
      plancheID: new Date(2021, 0, 2),
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
      plancheID: new Date(2021, 2, 15),
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
    },
  ];

  /**
   * Méthode pour ajouter une ligne à la base de donnée
   * @param {*} plancheID (au format Date dont heure, minute et seconde à 0)
   * @param {*} ligne
   */
  const addLigne = (plancheID, ligne) => {
    this.DUMMY_DATA.plancheID = plancheID;

    // On rajoute l'objet dans l'array "data"
    this.DUMMY_DATA.plancheID.push(ligne);
  };

  //this.addLigne = this.addLigne.bind(this);

  // La planche à afficher (car id = date)
  const plancheID = props.date;
  // Pour etre certain de travailler uniquement sur YYYY-MM-DD
  plancheID.setHours(0, 0, 0, 0);

  //console.log("PlancheID: "+plancheID);

  // On va itérer sur les données à la recherche de la bonne planche
  // getTime sinon la comparaison ne se valide jamais

  const plancheAAfficher = DUMMY_DATA.filter(
    (planche) => planche.plancheID.getTime() === plancheID.getTime()
  );

  //console.log(plancheAAfficher[0].plancheID);
  // plancheAAfficher est un array dont la taille est forcément de 1
  // (une seule planche par date)

  // Pour ne pas afficher un tableau qui n'existe pas
  if (plancheAAfficher.length === 0) {
    return <h2>Il n'y a pas encore de ligne aujourd'hui.</h2>;
  } else {
    // Je passe addLigne (méthode) au tableau, puis au form
    // this.addLigne et pas juste la méthode car on veut pouvoir modifier ce composant
    // on va donc bind
    return (
      <React.Fragment>
        {/** Je donne la fonction dispatch au controls pour qu'il puisse changer le state */}
        <Controls state={state} dispatch={dispatch} />
        <Tableau planche={plancheAAfficher[0]} addLigne={addLigne} state={state} dispatch={dispatch}/>
      </React.Fragment>
    );
  }
};

export default Planche;
