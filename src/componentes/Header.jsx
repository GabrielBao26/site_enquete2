import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faList, faPlus, faUser, faCircleInfo } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import Cookies from "js-cookie";



const Header = () => {

    const usuario = Cookies.get("usuario");
    console.log(usuario);

    const [menuAberto, setMenuAberto] = useState(false);

    return (
        <header>
            <nav className={menuAberto ? "menu-aberto" : ""}>
                <div>
                    <Link to="/lista-enquetes">
                        <FontAwesomeIcon icon={faList} /> Lista enquete

                    </Link>

                    <Link to="Sobre">
                        <FontAwesomeIcon icon={faCircleInfo} /> Sobre

                    </Link>

                </div>

                <div>
                    {
                        usuario !== undefined ? (
                            <>
                                <Link to="adicionar-enquete">
                                    <FontAwesomeIcon icon={faPlus} /> Adicionar enquete
                                </Link>
                                <Link>
                                    <FontAwesomeIcon icon={faUser} />{usuario}

                                </Link>
                            </>
                        ) : (
                            <Link to="Admin">
                                <FontAwesomeIcon icon={faUser} /> Login
                            </Link>

                        )
                    }


                </div>
            </nav>
            <div className="menu-icon">&#9776;</div>
        </header>
    )
}

export default Header