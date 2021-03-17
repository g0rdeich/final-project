import React from "react";
import PaginationBtn from "./PaginationMainBtn";
import PaginationMainPrevPageBtn from "./PaginationMainPrevPageBtn";
import PaginationMainNextPageBtn from "./PaginationMainNextPageBtn";

const PaginationMain = ( {store} ) => {
    const btnNumbers = [];
    for(let i = 1; i <= store.pokemons.length / store.cardsOnPage; i++) {
        btnNumbers.push(i);
    }
    return(
        <div className="pagination pagination-main">
            <PaginationMainPrevPageBtn store={store} />
            {btnNumbers.map(num => < PaginationBtn key={num.toString()} num={num} store={store}/>)}
            <PaginationMainNextPageBtn store={store} />
        </div>
    )
}

export default PaginationMain;