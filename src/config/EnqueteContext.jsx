import React, { createContext, useContext, useState } from "react";

/* Cria o Contexto*/
const EnqueteContext = createContext();

export const useEnquetes = () => useContext(EnqueteContext);

const EnqueteProvider = ({children}) => {

    const [enquetes, setEnquetes] = useState([]);

    const addEnquete = (enquete) => {
          setEnquetes([...enquetes,enquete]);
    };
   
    return(
        <EnqueteContext.Provider value={{enquetes, addEnquete}}>
            {children}
            </EnqueteContext.Provider>
           
    );
};

export default EnqueteProvider;

