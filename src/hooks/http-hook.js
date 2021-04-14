import { useState, useCallback, useRef, useEffect } from "react";

// custom hook
export const useHttpClient = () => {
  // Temps de chargement des données
  const [isLoading, setIsLoading] = useState(false);

  // Si on abandonne une requête (en changeant de page rapidement par exemple)
  // on ne veut pas update l'état d'un composant qu'on a plus sur notre page
  const activeHttpRequests = useRef([]); // Ne sera pas reinitialisé lorsque sendRequest sera re-exec

  // Pour eviter les infite loop, on utilise CallBack
  const sendRequest = useCallback(
    async (url, method = "GET", body = null, headers = {}) => {
      
        // Début de l'attente
        setIsLoading(true);
        const httpAbandontCrtl = new AbortController();
        activeHttpRequests.current.push(httpAbandontCrtl);

        try {
        const response = await fetch(url, {
          method,
          body,
          headers,
          signal: httpAbandontCrtl.signal,
        });

        const responseData = await response.json();

        activeHttpRequests.current = activeHttpRequests.current.filter(
          (reqCtrl) => reqCtrl !== httpAbandontCrtl
        );

        if (!response.ok) {
          console.log("Erreur lors de la réception des données");
        }

        // on donne les données
        // objet type {plancheID, data:[...]}
        setIsLoading(false);
        return responseData;
      } catch (err) {
        console.log("Erreur lors de la réception des données : " + err);
      }
      setIsLoading(false);
    },
    []
  );

  useEffect(() => {
    return () => {
      // Cleanup function
      activeHttpRequests.current.forEach((ctrl) => ctrl.abort());
    };
  }, []);

  return { isLoading, sendRequest };
};
