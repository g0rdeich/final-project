import React from "react";
import {useSelector} from "react-redux";

const CatchBtn = ( {id, store} ) => {
    const caughtPokemonIds = useSelector(store => store.caughtPokemonIds);
    return(
        <button className="btn btn-catch"
                value={id}
                onClick={store.catchPokemon}
                disabled={caughtPokemonIds.includes(id)}>Catch me!</button>
    )
}

export default CatchBtn;