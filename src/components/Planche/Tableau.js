import React, { useEffect } from "react";

import Ligne from "./Ligne";
import Form from "../Planche/Form/Form";
import "./Tableau.css";

const Tableau = (props) => {

  let form;

  if (props.state === "ajouter"|| props.state==="modifier") {
    /* Je passe en propriété la méthode addLigne de la classe "Planche" */
    form = (
      <Form
        key={props.state}
        action={props.state}
        addLigne={props.addLigne}
        modifieLigne={props.modifieLigne}
        selectedLine={props.selectedLine}
        dispatch={props.dispatch}
      />
    );
  }

  return (
    <React.Fragment>
      <table id="tableau" className="tableau">
        <tbody>
          <tr>
            <th colSpan="3" scope="colgroup">
              AVION
            </th>
            <th colSpan="3" scope="colgroup">
              PLANEUR
            </th>
            <th colSpan="2" scope="colgroup">
              PILOTE PLANEUR
            </th>
            <th colSpan="2" scope="colgroup">
              PASSAGER / INSTRUCTEUR
            </th>
            <th colSpan="3" scope="colgroup">
              REMORQUAGE
            </th>
            <th colSpan="2" scope="colgroup">
              PLANEUR
            </th>
            <th colSpan="3" rowSpan="2" scope="colgroup">
              N°Parachute
            </th>
          </tr>
          <tr>
            <th scope="col">Immat</th>
            <th scope="col">Pilote</th>
            <th scope="col">Code</th>
            <th scope="col">Type</th>
            <th colSpan="2" scope="colgroup">
              Immat
            </th>
            <th scope="col">Nom</th>
            <th scope="col">Code</th>
            <th scope="col">Nom</th>
            <th scope="col">Code</th>
            <th colSpan="2" scope="colgroup">
              Décollage
            </th>
            <th scope="col">Temps</th>
            <th colSpan="2" scope="colgroup">
              Atterrissage
            </th>
          </tr>
          {/* On affiche pour toutes les lignes reçues par props (une ligne = un ligne) */}
          {props.planche.data.map((ligne) => {
            if(props.state === 'modifier' && ligne.id === props.selectedLine.id){
              return form;
            }
            else {
            return (
              <Ligne
                key={ligne.id}
                immatAvion={ligne.avion.immat}
                nomPiloteAvion={ligne.avion.pilote}
                codePiloteAvion={ligne.avion.code}
                typePlaneur={ligne.planeur.type}
                immat1Planeur={ligne.planeur.immat1}
                immat2Planeur={ligne.planeur.immat2}
                nomPilotePlaneur={ligne.pilotePlaneur.nom}
                codePilotePlaneur={ligne.pilotePlaneur.code}
                nomPlaceArriere={ligne.placeArriere.nom}
                codePlaceArriere={ligne.placeArriere.code}
                decollageHeureRemorquage={ligne.remorquage.heure}
                decollageMinuteRemorquage={ligne.remorquage.minute}
                tempsRemorquage={ligne.remorquage.temps}
                atterrissageHeurePlaneur={ligne.atterrissage.heure}
                atterrissageMinutePlaneur={ligne.atterrissage.minute}
                numeroParachute={ligne.parachute}

                id={ligne.id}
                modifieLigne={props.modifieLigne}
                selectLigne={props.selectLigne}
                planche={props.planche}
              />
            );}
          })}
          {/** Si on doit ajouter une ligne, on render le form à la fin du tableau */}
          {props.state === 'ajouter' ? form : null}
        </tbody>
      </table>
    </React.Fragment>
  );
};

export default Tableau;
