import React, { useState } from "react";
import "animate.css/animate.css"; 
import Cookies from "js-cookie"; 
import {Navigate} from "react-router-dom"; 

const Admin = () => { 

    const [usuario, setUsuario] = useState(""); 
    const [senha, setSenha] = useState(""); 
    const [login, setLogin] = useState(false);
    //console.log(senha);

    const submitForm = (e) => {
        e.preventDefault();

        if(usuario == "Gabriel" && senha == "12345"){
            setLogin(true); 
            Cookies.set("usuario", usuario, {expires: 1})
        } else {
            alert("Usuário não registrado!")
        }
        //alert(123);
    };

    if (login){
        return <Navigate to="/adicionar-enquete" />;
    }
 
    return(
        <section className="animate__animated animate__backInUp">
            <form onSubmit={submitForm}>
                <label>Usuário </label>
               
                <input type="text" value={usuario} onChange={(e)=>setUsuario(e.target.value)}></input>
                <br />
                <label>Senha </label>
                <input type="password"value={senha} onChange={(e) => setSenha(e.target.value)}></input>
               
                <button type="submit">Acessar</button>
            </form> 
        </section>
    );
};

export default Admin
