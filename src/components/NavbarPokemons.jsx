import React from "react";
import { Link } from "react-router-dom";
import logoPokemon from "../img/logo.svg";
import "../css/navbarPokemons.css";

export default function NavbarPokemons(){
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
                    <div id="pokemons">
                        <Link to={"/pokemons"}>
                            <small>Pokemons</small>
                        </Link>
                    </div>
                    <div>
                        <Link to={"/contacts"}>
                            <small>Contato</small>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}