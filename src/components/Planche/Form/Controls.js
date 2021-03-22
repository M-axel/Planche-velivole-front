import React from "react";

import "./Controls.css";

const Controls = (props) => {

  const boutonAjouter = <img id="bouton-ajouter"
  src={window.location.origin + "/images/Plus.png"}
  alt="Ajouter une ligne"
  onClick={() => props.dispatch({type: 'ajouter'})}
/>

const boutonModifier = <button id="bouton-modifier"
onClick={() => props.dispatch({type: 'modifier'})}
disabled={props.state === 'selection' ? false : true } >Modifier</button>


const boutonSupprimer = <img id="bouton-supprimer"
src={window.location.origin + "/images/Moins.png"}
alt="Supprimer une ligne"
/>

  return (
    <React.Fragment>
      <div id="controlStrip">
        {boutonAjouter}
        {boutonModifier}
        {boutonSupprimer}
      </div>
    </React.Fragment>
  );
};

export default Controls;
