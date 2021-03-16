import React from "react";

import CardCollection from "./CardCollection";

const CardsFieldCollection = ( {store} ) => {
    const pageArr = [];
    const cardsOnPage = store.cardsOnPage;
    for (let i = cardsOnPage * (store.paginationPageCollection - 1); i < cardsOnPage * (store.paginationPageCollection); i++) {
        if(store.pokemons[store.caughtPokemonIds[i]]) {
            pageArr.push(store.pokemons[store.caughtPokemonIds[i]-1]);
        }
    }
    return(
        <div className="cards-field">
            {pageArr.map((pokemon) => <CardCollection name={pokemon.name} id={pokemon.id} key={pokemon.id} store={store}/>)}
        </div>
    )
}

export default CardsFieldCollection;