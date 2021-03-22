import React from "react";
//import { Link } from 'react-router-dom'; // Permet d'avoir un lien qui ne recharge pas la page

import "./Ligne.css";

const Ligne = (props) => {

  const clickHandler = () => {
    props.selectLigne(props.id);
  };

  return (
    // onClick => on veut "select" la ligne pour pouvoir la modifier/supprimer
    <tr id={props.id} className="ligne" onClick={clickHandler}>
        <td>{props.immatAvion}</td>
        <td>{props.nomPiloteAvion}</td>
        <td>{props.codePiloteAvion}</td>
        <td>{props.typePlaneur}</td>
        <td>{props.immat1Planeur}</td>
        <td>{props.immat2Planeur}</td>
        <td>{props.nomPilotePlaneur}</td>
        <td>{props.codePilotePlaneur}</td>
        <td>{props.nomPlaceArriere}</td>
        <td>{props.codePlaceArriere}</td>
        <td>{props.decollageHeureRemorquage}</td>
        <td>{props.decollageMinuteRemorquage}</td>
        <td>{props.tempsRemorquage}</td>
        <td>{props.atterrissageHeurePlaneur}</td>
        <td>{props.atterrissageMinutePlaneur}</td>
        <td>{props.numeroParachute}</td>
    </tr>
  );
};

export default Ligne;
