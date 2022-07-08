import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar";
import "../../css/home.css";
import banner from "../../img/banner.svg";

export default function Home(){
    return(
        <>
            <Navbar/>
            <div className="containerHome">
                <div className="homeElements">
                    <div className="homeTittle">
                        <h1>Qual pokemon você escolheria?</h1>
                    </div>
                    <div className="homeParagraph">
                        <p>
                            Aqui você pode saber o tipo de pokémon, seus pontos fortes, fracos e habilidaddes.
                        </p>
                    </div>
                    <div className="homeButton">
                        <Link to={"/pokemons"}>
                            <button>
                                Veja os pokemons
                            </button>
                        </Link>
                    </div>
                </div>
                <div className="homeImages">
                    <div>
                        <img src={banner} alt="Pikachu"/>
                    </div>
                </div>
            </div>
        </>
    )
}