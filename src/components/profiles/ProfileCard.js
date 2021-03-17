import React from "react";
import CatchBtnProfile from "./CatchBtnProfile";
import {useSelector} from "react-redux";

const ProfileCard = ( {store} ) => {
    const caughtPokemonIds = useSelector(store => store.caughtPokemonIds);
    const currentId = useSelector(store => store.activeProfileId);
    const currentIdInfo = useSelector(store => store.pokemons[currentId - 1]);
    const path = `./src/pokemons/${currentId}.png`;
    const className = caughtPokemonIds.includes(currentId) ? "card card-profile caught" : "card card-profile";
    return(
        <div className={className}>
            <div className="card-info">
                <img className="card-img" src={path} alt={currentIdInfo.name}/>
                <p> ID: {currentIdInfo.id}</p>
                <p> Name: {currentIdInfo.name}</p>
                <p> Caught: {currentIdInfo.captureDate || "You can catch this pokemon later"}</p>
            </div>
            <div className="card-buttons">
                < CatchBtnProfile id={currentIdInfo.id} store={store}/>
            </div>
        </div>
    )
}

export default ProfileCard;