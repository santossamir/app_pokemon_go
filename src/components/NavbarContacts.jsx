import React from "react";
import { Link } from "react-router-dom";
import logoPokemon from "../img/logo.svg";
import "../css/navbarContacts.css";

export default function Navbar(){
    return(
        <>
            <div className="nav-wrapper">
                <div className="logo">
                    <Link to="/">
                        <img src={logoPokemon} alt="Logo Pokémon"/>
                    </Link> 
                </div>
                <div className="menu">
                    <div>
                        <Link to={"/"}>
                            <small>Home</small>
                        </Link>
                    </div>
                    <div>
                        <Link to={"/pokemons"}>
                            <small>Pokemons</small>
                        </Link>
                    </div>
                    <div id="contacts">
                        <Link to={"/contacts"}>
                            <small>Contato</small>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}