import React, { useState } from "react";
import "animate.css/animate.css"
import { useEnquetes } from "../config/EnqueteContext";


const AdicionarEnquete = () => {
    const {addEnquete} = useEnquetes();
    const [enquete, setEnquete] = useState("");
    const [opcoes, setOpcoes] = useState([]);


    const addOpcao = (e) => {
        setOpcoes([...opcoes, ""])  //spread operator - pegar todos os elementos do array opções
    }

    //console.log(opcoes); 

    const submitForm = (e) => {
        e.preventDefault();

        for(let i=0; i< opcoes.length; i++) {
            if (!opcoes[i]) {
                return false;
            }

        }
         
       const formData = new FormData(e.target)

        fetch("http://localhost/enquete/api/adiciona-enquete.php", {
             method: "POST",
             body: formData,
        }).then((resposta) => resposta.json());

        addEnquete({enquete, opcoes});
        setEnquete("");
        setOpcoes([""]);

    };

    const handOpcaoChange = (e,index) =>{
        const newOpcoes = (e, index) =>{
            newOpcoes[index] = e.target.value;
            SecurityPolicyViolationEvent(newOpcoes);
        }
    }

    const handleOpcaoChange = (e, index) => {
        const newOpcoes = [...opcoes]; //spread operator - pegar os novos valores opções. 
        //console.log(newOpcoes); 
        newOpcoes[index] = e.target.value;
        setOpcoes(newOpcoes);
    }



    return (
        <section className="animate__animated animate__backInUp">
            <form onSubmit={submitForm}>
                <label>Informe um título para a enquete </label>
                <br />
                <input
                name="titulo"
                autoFocus 
                type="text" 
                value={enquete}
                    onChange={(e) => setEnquete(e.target.value)}></input>

                {opcoes.map((opttion, index) => (
                    <div key={index}>
                        <label>{`Opção ${index + 1}  `}</label>
                        <br />
                        <input 
                        name="opcoes[]"
                        type="text" 
                        value={opttion}
                        onChange={(e) => handleOpcaoChange(e, index)}></input>
                    </div>
                ))}
                <br />
                {enquete ? (
                    <button type="submit" onClick={addOpcao}>
                        Adicionar opção
                    </button>
                ) : ("")}

                {opcoes.length > 1 ?
                    <button type="submit">Salvar Enquete</button>
                    : ""
                }

            </form>
        </section>
    );
};




export default AdicionarEnquete;