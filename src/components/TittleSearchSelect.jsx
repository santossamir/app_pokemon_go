import React, {useState} from "react";
import { api } from "../service/api.js";
import "../css/pokemons.css";
import search from "../img/iconSearch.svg";
import PokemonsSearchDetails from "../modal/PokemonsSearchDetails.jsx";

export default function TittleSearchSelect(){
    const [pokemonsName, setPokemonsName] = useState("");
    const [pokemonChoose, setPokemonChoose] = useState(false);
    const [detailsPokemonSearch, setDetailsPokemonSearch] = useState([]);
    const [modalSearch, setModalSearch] = useState(false);
    const [pokemonReturn, setPokemonReturn] = useState({
            name: "",
            id: "",
            types: "",
            image: "",
            attack:"",
            defense: "",
            specialAttack: "",
            height: "",
            weight: "",
            power: "",
        });
    
    const searchPokemon = () =>{
        api.get(`pokemon/${pokemonsName.trim().toLowerCase()}`).then((response)=>{
            setPokemonReturn({
                name: pokemonsName,
                id: response.data.id,
                types: response.data.types,
                image: response.data.sprites.other.dream_world.front_default,
                attack:response.data.stats[1].base_stat,
                defense: response.data.stats[2].base_stat,
                specialAttack: response.data.stats[3].base_stat,
                height: response.data.height,
                weight: response.data.weight,
                power: response.data.abilities[0].ability.name,
            })
            setPokemonChoose(true);
        })
    }
        
    function openModal(){
        setModalSearch(true);
    }

    return(
        <>
            <div className="boxTittleSearchSelect">
                <div className="pokemonsTittle">
                    <small> Mais de 250 Pokemons para você escolher o seu favorito</small>
                </div>
                <div className="pokemonsSearch">
                    <input type="text" placeholder="Pesquisar pokemon"
                        onChange={(event)=>{
                            setPokemonsName(event.target.value);
                        }}
                    />
                    <button onClick={searchPokemon}>
                        <img src={search} alt="Lupa"/>
                    </button>
                </div>
            </div>
            <div className="pokemonsCards">
                <div className="pokemonResponse">
                    {!pokemonChoose ?
                        (<div></div>):
                        (<div className={'cards '+pokemonReturn.types[0].type.name} onClick={()=> {openModal(); setDetailsPokemonSearch(pokemonReturn)}}> 
                            <div className="cardNumber">
                                <small>{pokemonReturn.id < 9 ? '#00'+pokemonReturn.id : '#0'+pokemonReturn.id}</small>
                            </div>
                            <div className="cardName">
                                 <small>{pokemonReturn.name[0].toUpperCase()+pokemonReturn.name.substr(1)}</small>
                            </div>
                            <div className="cardCategoriesImage">
                                <div className="cardCategories">
                                    <div className="type">
                                        <small>{pokemonReturn.types[0].type.name[0].toUpperCase()+pokemonReturn.types[0].type.name.substr(1)}</small>
                                    </div>
                                    {pokemonReturn.types[1]?
                                        (<div className="typeTwo">
                                            <small>{pokemonReturn.types[1].type.name[0].toUpperCase()+pokemonReturn.types[0].type.name.substr(1)}</small>
                                        </div>) :
                                        (<div></div>)
                                    }
                                </div>
                                <div className="cardImage">
                                    <img src={pokemonReturn.image} alt={pokemonReturn.name}/>
                                </div>
                            </div>
                        </div>
                        )
                    }
                </div>
                {modalSearch &&
                    <PokemonsSearchDetails
                        modalState={modalSearch} 
                        setModalState={setModalSearch} 
                        details={detailsPokemonSearch}
                    />
                }
            </div>
        </>
    )
}