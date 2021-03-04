import React from "react";

import Ligne from "./Ligne";
import "./Tableau.css";

const Tableau = props => {
  // Si le tableau n'a pas de ligne
  if (props.vol.length === 0) {
    return <h2>Il n'y a pas encore de vol aujourd'hui.</h2>;
  }

  return (
    <table className="tableau">
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
    </table>
  );
};

export default Tableau;
