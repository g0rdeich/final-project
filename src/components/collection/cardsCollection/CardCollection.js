import React from "react";
import InfoBtn from "./InfoBtn";
import {useSelector} from "react-redux";

const CardCollection = ({id, name, store} ) => {
    const caughtPokemonIds = useSelector(store => store.caughtPokemonIds);
    const path = `./src/pokemons/${id}.png`;
    const className = caughtPokemonIds.includes(id) ? "card caught" : "card";
    return(
        <div className={className}>
            <div className="card-info">
                <img className="card-img" src={path} alt={name}/>
                <p> ID: {id}</p>
                <p> Name: {name}</p>
            </div>
            <div className="card-buttons">
                < InfoBtn />
            </div>
        </div>
    )
}

export default CardCollection;