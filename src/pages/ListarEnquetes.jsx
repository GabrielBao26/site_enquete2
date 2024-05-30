import React, { useState } from "react";
import "animate.css/animate.css"
import { useEnquetes } from "../config/EnqueteContext";
const ListarEnquete = () => {
    const { enquetes } = useEnquetes();
    const[votos, setVotos] = useState([]);
    const[opcaoVotada, setOpcaoVotada] = useState([]);
    

    const submitVoto = (index) => {
      const updateVotos = [...votos];

      if(!opcaoVotada.includes(index)){
        //console.log(updateVotos);
        updateVotos[index] = (updateVotos[index] || 0) + 1;
        setVotos(updateVotos);
        setOpcaoVotada([...opcaoVotada, index])
      }else{
        updateVotos[index] -= 1;
        setVotos(updateVotos);
        setOpcaoVotada(opcaoVotada.filter((opcao) => opcao !== index ));
      }

    };

    const BoxEnquetes = () => {

        if (enquetes.lenght == 0) {
            return <div> Não há enquetes</div>;
        }

        return (
            <>
                {enquetes.map((enquete, index) => (
                    <div className="box-enquete" key={index}>
                        <h3>{enquete.enquete}</h3>
                        <ul>
                            {enquete.opcoes.map((opcao, segundoIndex) => (
                                <li onClick={() =>
                                     submitVoto(index + 1 + "" + segundoIndex)
                                    } 
                                     key={index + 1 + "" + segundoIndex}
                                     >
                                        {opcao} - Votos:
                                        {votos[index + 1 + "" + segundoIndex]}
                                        </li>
                                     
                            ))}

                        </ul>
                    </div>
                ))}


            </>

        );

    };

    return (
        <section className="box-enquetes animate__animated">
            <BoxEnquetes />

        </section>
    );

};

export default ListarEnquete;