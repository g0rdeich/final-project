import React from "react";
import PaginationCollection from "./paginationCollection/PaginationCollection";
import CardsFieldCollection from "./cardsCollection/CardsFieldCollection";

const Collection = ( {store} ) => {
    return(
        <div className="main">
            < PaginationCollection store={store}/>
            {store.caughtPokemonIds.length !== 0 ? < CardsFieldCollection store={store}/> :
                <div>"You have no pokemons here yet"</div>}
        </div>
    )
}

export default Collection;