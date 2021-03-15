import React from "react";
import PaginationBtn from "./PaginationBtn";

const Pagination = ({store} ) => {
    const btnNumbers = [];
    for(let i = 1; i <= store.pokemons.length / store.cardsOnPage; i++) {
        btnNumbers.push(i);
    }
    return(
        <div className="pagination">
            {btnNumbers.map(num => < PaginationBtn key={num.toString()} num={num} store={store}/>)}
        </div>
    )
}

export default Pagination;