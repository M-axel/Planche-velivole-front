import React from "react";

import SubmitButton from "./SubmitButton";
import "./Form.css";
import "../Tableau.css";

/**
 *
 * @param {*} props key, action, addLigne (function), modifieLigne (fonction), selectedLine (objet), dispatch (function)
 * @returns
 */
const Form = (props) => {
  // Props : 'ajouter' ou 'modifier'
  const action = props.action;

  return (
    <React.Fragment>
      <tr>
        <td>
          {/** defaultValue n'est utilisé que si on modifie une ligne, les default values sont donc les anciennes value
           * TODO : vérifier ce qu'il se passe si l'ancienne value n'existe pas (case vide)
           */}
          <input
            type="text"
            name="name"
            id="immatAvion"
            required
            defaultValue={
              props.action === "modifier"
                ? props.selectedLine.avion.immat
                : null
            }
          />
        </td>
        <td>
          <input type="text" name="name" id="nomPiloteAvion" required defaultValue={props.action === 'modifier' ? props.selectedLine.avion.pilote : null} />
        </td>
        <td>
          <input type="text" name="name" id="codePiloteAvion" required defaultValue={props.action === 'modifier' ? props.selectedLine.avion.code : null}/>
        </td>
        <td>
          <input type="text" name="name" id="typePlaneur" required defaultValue={props.action === 'modifier' ? props.selectedLine.planeur.type : null}/>
        </td>
        <td>
          <input type="text" name="name" id="immat1Planeur" required defaultValue={props.action === 'modifier' ? props.selectedLine.planeur.immat1 : null} />
        </td>
        <td>
          <input type="text" name="name" id="immat2Planeur" required defaultValue={props.action === 'modifier' ? props.selectedLine.planeur.immat2 : null} />
        </td>
        <td>
          <input type="text" name="name" id="nomPilotePlaneur" required defaultValue={props.action === 'modifier' ? props.selectedLine.pilotePlaneur.nom : null} />
        </td>
        <td>
          <input type="text" name="name" id="codePilotePlaneur" required defaultValue={props.action === 'modifier' ? props.selectedLine.pilotePlaneur.code : null} />
        </td>
        <td>
          <input type="text" name="name" id="nomPlaceArriere" defaultValue={props.action === 'modifier' ? props.selectedLine.placeArriere.nom : null} />
        </td>
        <td>
          <input type="text" name="name" id="codePlaceArriere" defaultValue={props.action === 'modifier' ? props.selectedLine.placeArriere.code : null} />
        </td>
        <td>
          <input type="text" name="name" id="decollageHeureRemorquage" defaultValue={props.action === 'modifier' ? props.selectedLine.remorquage.heure : null} />
        </td>
        <td>
          <input type="text" name="name" id="decollageMinuteRemorquage" defaultValue={props.action === 'modifier' ? props.selectedLine.remorquage.minute : null} />
        </td>
        <td>
          <input type="text" name="name" id="tempsRemorquage" defaultValue={props.action === 'modifier' ? props.selectedLine.remorquage.temps : null} />
        </td>
        <td>
          <input type="text" name="name" id="atterrissageHeurePlaneur" defaultValue={props.action === 'modifier' ? props.selectedLine.atterrissage.heure : null} />
        </td>
        <td>
          <input type="text" name="name" id="atterrissageMinutePlaneur" defaultValue={props.action === 'modifier' ? props.selectedLine.atterrissage.minute : null} />
        </td>
        <td>
          <input type="text" name="name" id="numeroParachute" defaultValue={props.action === 'modifier' ? props.selectedLine.parachute : null} />
        </td>
      </tr>
      <SubmitButton
        action={action}
        addLigne={props.addLigne}
        modifieLigne={props.modifieLigne}
        dispatch={props.dispatch}
      />
    </React.Fragment>
  );
};

export default Form;
