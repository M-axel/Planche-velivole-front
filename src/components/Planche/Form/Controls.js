import React from "react";

import "./Controls.css";

const Controls = (props) => {
  return (
    <React.Fragment>
      <div id="controlStrip">
        <img
          src={window.location.origin + "/images/Plus.png"}
          alt="Ajouter une ligne"
          onClick={() => props.dispatch({type: 'ajouter'})}
        />
        <div>Modifier</div>
        <img
          src={window.location.origin + "/images/Moins.png"}
          alt="Supprimer une ligne"
        />
      </div>
    </React.Fragment>
  );
};

export default Controls;
