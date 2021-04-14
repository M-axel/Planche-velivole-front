import React, { useState, useReducer, useEffect } from "react";

import Tableau from "../components/Planche/Tableau";
import Controls from "../components/Planche/Form/Controls";
import { useHttpClient } from "../hooks/http-hook";

const reducer = (state, action) => {
  switch (action.type) {
    case "consultation":
      state = "consultation";
      return state;
    case "ajouter":
      state = "ajouter";
      console.log("On ajoute");
      return state;
    case "selection":
      state = "selection";
      return state;
    case "modifier":
      state = "modifier";
      console.log("On modifie");
      return state;
    default:
      return state; // On retourne l'état actuel
  }
};

const Planche = (props) => {
  if (props.length === 0) {
    window.alert("On veut afficher une planche sans sa date");
  } else if (props.length > 1) {
    window.alert("Trop de planches données en props");
  }

  const DUMMY_DATA = []; // A supprimer

  // On utilise un etat : consultation, ajout ou modification
  const [state, dispatch] = useReducer(reducer, "consultation");
  // SelectedLine va contenir un objet {volID:'..', ...} => juste 'id' de la ligne, comme MongoDB l'a crée
  const[selectedLine, setSelectedLine] = useState(null);
  
  const { isLoading, sendRequest } = useHttpClient();

  // loadedPlanche => Planche actuelle
  const [loadedPlanche, setLoadedPlanche] = useState();

  /**
   * Méthode pour ajouter une ligne à la base de donnée
   * Est lancée par SubmitButton, dans Form, dans Tableau
   * @param {*} plancheID (au format Date dont heure, minute et seconde à 0)
   * @param {*} ligne
   */
  const addLigne = async (ligne) => {
    // On part du principe qu'une planche existe déjà
    try{
      await sendRequest('http://localhost:5000/api/planche/'+plancheIDsec+'/ligne', 'POST', 
      JSON.stringify({
      avion: ligne.avion,
      planeur: ligne.planeur,
      pilotePlaneur: ligne.pilotePlaneur,
      placeArriere: ligne.placeArriere,
      remorquage: ligne.remorquage,
      atterrissage : ligne.atterrissage,
      parachute : ligne.parachute
    }));
    } catch(err){
    }
    // TODO : Refresh la page après ça
  };
  //this.addLigne = this.addLigne.bind(this);

  /********************** SELECTION DE LIGNE ***********************/

  /**
   * Fonction appellée par un component Ligne lorsque onClick est déclenché
   * @param {*} key 
   */
  const selectLigne = (key) => {
    // on trouve la ligne dans la planche actuelle
    const ligne = loadedPlanche.data.find(
      (ligne) => ligne.id === key
      );
      //console.log("Ligne sélectionnée : "+ ligne);
    // On change l'état
    setSelectedLine(ligne);

    // On enleve le css de la précédente selectedLigne :
    const previousSelection = document.getElementsByClassName('ligne selected');
    if(previousSelection[0]){previousSelection[0].classList.remove('selected');}

    const ligneDOM = document.getElementById(key);
    ligneDOM.className += ' selected';

    // On change l'état
    dispatch({type: 'selection'})
  };

  /********************** MODIFICATION DE LIGNE ***********************/

  /**
   * Pour modifier une ligne, il faut que l'état de Planche soit 'selection'
   * on peut donc utiliser la variable selectedLigne
   * 
   * @param {*} ligne 
   */
  const modifieLigne = (ligne) => {
    /*console.log("modifieLigne recoit : "+ligne.avion.immat);
    console.log("Ligne à modifier : "+ selectedLine.volID);*/
    if (loadedPlanche) {
      // l'argument "ligne" avec un volID à "-1", on le change avec celui de la bonne ligne
      ligne.id = selectedLine;

      // On peut directement push car la nouvelle ligne ayant le même id que l'ancienne, elle l'overwrite
      // TODO : vérifier que ça marche
      loadedPlanche.data.push(ligne);
    }else{console.log("Aucune planche modifiable pour le moment");}
  };
  /********************** SUPPRESSION ***********************/

  const supprimeLigne = () => {
    console.log("On supprime ligne id : " + selectedLine);

    // ça parait inutile mais je veux etre certain de prendre à partir de DUMMY_DATA et pas plancheAAfficher
    const planche = DUMMY_DATA[DUMMY_DATA.indexOf(loadedPlanche)];
    const positionLigne = planche.data.indexOf(selectedLine);

    planche.data.slice(positionLigne, positionLigne+1);

    // TODO : envoyer l'action au backend
  }

  /********************** AFFICHAGE ***********************/

  
  // La planche à afficher (car id = date)
  const plancheID = props.date;
  // Pour etre certain de travailler uniquement sur YYYY-MM-DD
  plancheID.setHours(0, 0, 0, 0);

  // getTime car c'est le format qui permet de comparer sans faire d'erreur sur les dates
  const plancheIDsec = plancheID.getTime();

  // Le deuxième paramètre "[]" est la liste des données qui doivent changer pour que ce useEffect soit executé à nouveau
  // la liste étant vide, ne sera exécuté qu'une seule fois
  useEffect( () => { 
    // On crée un autre fonction pour ne pas faire un async/await sur useEffect
    const getPlanche = async () => {
      try{
        // On récupère notre planche/nos lignes
      // Pas besoin de spécifier la methode 'GET' puisque c'est celle de base
      const responseData = await sendRequest('http://localhost:5000/api/planche/'+plancheIDsec);
      
      setLoadedPlanche(responseData);
      }catch (err){
      console.log('Impossible de récuperer la planche : '+err.message);
    }
    };
    getPlanche();
  }, [sendRequest, plancheIDsec]);


  // Pour ne pas afficher un tableau qui n'existe pas
  if (!loadedPlanche || loadedPlanche.data.length < 1) { 
    return <h2>Il n'y a pas encore de ligne aujourd'hui.</h2>;
  } else {  // Ici, on devrait se servir de isLoading
    // Je passe addLigne (méthode) au tableau, puis au form
    // this.addLigne et pas juste la méthode car on veut pouvoir modifier ce composant
    // on va donc bind
    return (
      <React.Fragment>
        {/** Je donne la fonction dispatch au controls pour qu'il puisse changer le state 
         * props.archive => si true (donc généré par archive) on ne veut pas pouvoir modifier, ajouter, supprimer
        */}
        { props.archive ? null : <Controls state={state} dispatch={dispatch} supprimeLigne={supprimeLigne} />}
        {
          // On vérifie que l'on ne soit pas entrain de charger les données et qu'elles sont bien a disposition
          <Tableau
          planche={loadedPlanche}
          addLigne={addLigne}
          modifieLigne={modifieLigne}
          selectLigne= {selectLigne}
          selectedLine={selectedLine}
          state={state}
          dispatch={dispatch}
        />
        }
        
      </React.Fragment>
    );
  }
};

export default Planche;
