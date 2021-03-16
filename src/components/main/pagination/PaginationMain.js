import React from "react";
import PaginationBtn from "./PaginationMainBtn";

const PaginationMain = ( {store} ) => {
    const btnNumbers = [];
    for(let i = 1; i <= store.pokemons.length / store.cardsOnPage; i++) {
        btnNumbers.push(i);
    }
    return(
        <div className="pagination pagination-main">
            {btnNumbers.map(num => < PaginationBtn key={num.toString()} num={num} store={store}/>)}
        </div>
    )
}

export default PaginationMain;