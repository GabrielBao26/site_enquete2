import React from "react";
import { Route, Routes} from "react-router-dom";
import EnqueteProvider from "./EnqueteContext";
import ListarEnquete from "../pages/ListarEnquetes";
import AdicionarEnquete from "../pages/AdicionarEnquete";
import Admin from "../pages/Admin";
import Sobre from "../pages/Sobre";
import Home from "../pages/Home";

function Rotas(){
    return (
        <EnqueteProvider>
        <Routes>
            <Route path="/listar-enquetes" element={<ListarEnquete />}/>
            <Route path="/Sobre" element={<Sobre />}/>
            <Route path="/adicionar-enquete" element={<AdicionarEnquete />}/>
            <Route path="/Admin" element={<Admin />}/>
            <Route path="/" element={<Home />}/>
            
        </Routes>
        </EnqueteProvider>
    )
};

export default Rotas;