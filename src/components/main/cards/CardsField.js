import React from "react";

import Card from "./Card";

const CardsField = ( {store} ) => {
    const pageArr = [];
    const cardsOnPage = store.cardsOnPage;
    for (let i = cardsOnPage * (store.paginationPageMain - 1); i < cardsOnPage * (store.paginationPageMain); i++) {
        pageArr.push(store.pokemons[i]);
    }
    return(
        <div className="cards-field">
            {pageArr.map((pokemon) => <Card name={pokemon.name} id={pokemon.id} key={pokemon.id} store={store}/>)}
        </div>
    )
}

export default CardsField;