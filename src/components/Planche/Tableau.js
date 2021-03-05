import React from "react";

import Ligne from "./Ligne";
import "./Tableau.css";

const Tableau = (props) => {
  // Si le tableau n'a pas de ligne
  if (props.vol.length === 0) {
    return <h2>Il n'y a pas encore de vol aujourd'hui.</h2>;
  }

  return (
    <table className="tableau">
        <tbody>
        <tr>
          <th colSpan="3" scope="colgroup">AVION</th>
          <th colSpan="3" scope="colgroup">PLANEUR</th>
          <th colSpan="2" scope="colgroup">PILOTE PLANEUR</th>
          <th colSpan="2" scope="colgroup">PASSAGER / INSTRUCTEUR</th>
          <th colSpan="3" scope="colgroup">REMORQUAGE</th>
          <th colSpan="2" scope="colgroup">PLANEUR</th>
          <th colSpan="3" rowSpan="2" scope="colgroup">N°Parachute</th>
        </tr>
        <tr>
          <th scope="col">Immat</th>
          <th scope="col">Pilote</th>
          <th scope="col">Code</th>
          <th scope="col">Type</th>
          <th colSpan = "2" scope="colgroup">Immat</th>
          <th scope="col">Nom</th>
          <th scope="col">Code</th>
          <th scope="col">Nom</th>
          <th scope="col">Code</th>
          <th colSpan = "2" scope="colgroup">Décollage</th>
          <th scope="col">Temps</th>
          <th colSpan = "2" scope="colgroup">Atterrissage</th>
        </tr>
      {/* On affiche pour toutes les lignes reçues par props (une ligne = un vol) */}
      {props.vol.map((vol) => (
        <Ligne
          key={vol.id}
          /* Remplacer par vol.avion.immat ... */
          immatAvion={vol.avion.immat}
          nomPiloteAvion={vol.avion.pilote}
          codePiloteAvion={vol.avion.code}
          typePlaneur={vol.planeur.type}
          immat1Planeur={vol.planeur.immat1}
          immat2Planeur={vol.planeur.immat2}
          nomPilotePlaneur={vol.pilotePlaneur.nom}
          codePilotePlaneur={vol.pilotePlaneur.code}
          nomPlaceArriere={vol.placeArriere.nom}
          codePlaceArriere={vol.placeArriere.code}
          decollageHeureRemorquage={vol.remorquage.heure}
          decollageMinuteRemorquage={vol.remorquage.minute}
          tempsRemorquage={vol.remorquage.temps}
          atterrissageHeurePlaneur={vol.atterrissage.heure}
          atterrissageMinutePlaneur={vol.atterrissage.minute}
          numeroParachute={vol.parachute}
        />
      ))}
      </tbody>
    </table>
  );
};

export default Tableau;
