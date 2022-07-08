import React, {useState, useEffect} from "react";
import closeIcon from "../img/closeIcon.svg";
import vector from "../img/vector.svg";
import vectorTwo from "../img/vector2.svg";
import { api } from "../service/api.js";
import "../css/pokemonsDetails.css";

export default function PokemonsSearchDetails(props){
    
    const {id, name, weight, height, types, attack, defense, image, specialAttack, power} = props.details;
    const [description, setDescription] = useState([])
    console.log(props);
    async function descriptionPoke(){
        const data = await api.get(`pokemon-species/${id}/`, {method:'GET'});
        const poke = data.data.flavor_text_entries[10].flavor_text;          
        setDescription(poke);
    }

    useEffect(()=>{
        descriptionPoke();
    }, []);

    return(
        <>
            {props.modalState ? 
                <div className="modalContainer">
                    <div className="closeModal">
                        <img src={closeIcon} onClick={()=> props.setModalState(false)} alt="Fechar"/>
                    </div>
                    <div className="boxCardModal">
                        <div className={'posterCard '+types[0].type.name}>
                            <div className="portesCardImage">
                                <img src={image} alt={name}/>
                                <div className="posterCardTypes">
                                    <div className="posterType">
                                        <small>{types[0].type.name[0].toUpperCase()+types[0].type.name.substr(1)}</small>
                                    </div>
                                    {types[1]?
                                        <div className="posterTypeTwo">
                                            <small>{types[1].type.name[0].toUpperCase()+types[0].type.name.substr(1)}</small>
                                        </div>:
                                        <dvi></dvi>
                                    }
                                </div>
                            </div>
                        </div>
                        <div className="detailsCard">
                            <div className="nameId">
                                <div className="name">
                                    <small>{name[0].toUpperCase()+name.substr(1)}</small>
                                </div>
                                <div className="id">{id <= 9 ? '#00'+id : '#0'+id}</div>
                            </div>
                            <div className="description">
                                <p>
                                    {description}
                                </p>
                            </div>
                            <div className="screening">
                                <div className="width">
                                    <img src={vector} alt="Balança"/>
                                    <small>{weight} Kg</small>
                                    <p>Peso</p>
                                </div>
                                <div className="height">
                                    <img src={vectorTwo} alt="Régua"/>
                                    <small>{height} m</small>
                                    <p>Altura</p>
                                </div>
                                <div className="power">
                                    <small>{power[0].toUpperCase()+power.substr(1)}</small>
                                    <p>Poder Principal</p>
                                </div>
                            </div>
                            <div className="tableCharacteristics">
                                <table>
                                    <tr>
                                        <th>Ataque</th>
                                        <td>{attack}</td>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <th>Defesa</th>
                                        <td>{defense}</td>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <th>VI. Ataque</th>
                                        <td>{specialAttack}</td>
                                        <td></td>
                                    </tr>                              
                                    <tr>
                                        <th>Total</th>
                                        <td>{attack + defense + specialAttack}</td>
                                        <td></td>
                                    </tr>
                                </table> 
                            </div>
                        </div>
                    </div>
                </div> :
                <div></div>
            }
        </>
    )
}