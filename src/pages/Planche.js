import React from "react";

import Tableau from "../components/Planche/Tableau";

const Planche = () => {
  //Dummy
  const VOL = [
    {
      id: "1",
      avion: { immat: "ZV", pilote: "LRC", code: "3208" },
      planeur: { type: "LS6", immat1: "D", immat2: "G" },
      pilotePlaneur: { nom: "DEWEZ", code: "544" },
      placeArriere: { nom: "", code: "" },
      remorquage: { heure: "11", minute: "49", temps: "6" },
      atterrissage: { heure: "16", minute: "54" },
      parachute: "22",
    },
  ];

  return <Tableau vol={VOL} />;
};

export default Planche;
