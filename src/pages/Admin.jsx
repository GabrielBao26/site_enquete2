import React from "react";



const Admin = () => {
    return(
        <section> 
            <form>
                <label>Usuário</label>
                <br/>
                <input type="text"></input>
                <br/>
                <label>Senha</label>
                <input type="password"></input>
                <br/>
                <button type="submit">Acessar</button>
            </form>
             </section>
    );
};





export default Admin;