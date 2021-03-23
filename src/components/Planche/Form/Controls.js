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
// Si mon état n'est pas selection, je ne veux pas pouvoir cliquer sur le bouton
disabled={props.state === 'selection' ? false : true } >Modifier</button>


const boutonSupprimer = <img id="bouton-supprimer"
src={window.location.origin + "/images/Moins.png"}
alt="Supprimer une ligne"
// On ne va pas changer d'état, simplement appeller la méthode de suppression dans Planche.js
// (sans paramètre puique c'est Planche.js qui sait qu'elle ligne elle doit supprimer)
onClick={() => props.supprimeLigne()}
// pareil que pour bouton modifier, mais en css
className={props.state === 'selection' ? null : "disabled"}
/>

  return (
      <div id="controlStrip">
        {boutonAjouter}
        {boutonModifier}
        {boutonSupprimer}
      </div>
  );
};

export default Controls;
