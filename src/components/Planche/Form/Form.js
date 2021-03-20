import React from 'react';

import SubmitButton from './SubmitButton';
import './Form.css';
import '../Tableau.css';

// On aura besoin d'un tunel pour généré le form de modification au milieu du tableau
const Form = (props) => {
    // Props : 'ajouter' ou 'modifier'
    const action = props.action;

    if(action === 'ajouter'){
    return (
        <React.Fragment>
        <tr>
        <td>
            <input type="text" name="name" id="immatAvion" required />
        </td>
        <td>
            <input type="text" name="name" id="nomPiloteAvion" required />
        </td>
        <td>
            <input type="text" name="name" id="codePiloteAvion" required />
        </td>
        <td>
            <input type="text" name="name" id="typePlaneur" required />
        </td>
        <td>
            <input type="text" name="name" id="immat1Planeur" required />
        </td>
        <td>
            <input type="text" name="name" id="immat2Planeur" required />
        </td>
        <td>
            <input type="text" name="name" id="nomPilotePlaneur" required />
        </td>
        <td>
            <input type="text" name="name" id="codePilotePlaneur" required />
        </td>
        <td>
            <input type="text" name="name" id="nomPlaceArriere" />
        </td>
        <td>
            <input type="text" name="name" id="codePlaceArriere" />
        </td>
        <td>
            <input type="text" name="name" id="decollageHeureRemorquage" />
        </td>
        <td>
            <input type="text" name="name" id="decollageMinuteRemorquage" />
        </td>
        <td>
            <input type="text" name="name" id="tempsRemorquage" />
        </td>
        <td>
            <input type="text" name="name" id="atterrissageHeurePlaneur" />
        </td>
        <td>
            <input type="text" name="name" id="atterrissageMinutePlaneur" />
        </td>
        <td>
            <input type="text" name="name" id="numeroParachute" />
        </td>
    </tr>
    <SubmitButton addLigne = {props.addLigne} dispatch={props.dispatch} />
    </React.Fragment>
    
    );
    }
};

export default Form;