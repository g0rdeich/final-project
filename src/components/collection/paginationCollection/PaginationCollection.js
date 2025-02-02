import React from "react";
import PaginationCollectionBtn from "./PaginationCollectionBtn";
import PaginationCollectionPrevPageBtn from "./PaginationCollectionPrevPageBtn";
import PaginationCollectionNextPageBtn from "./PaginationCollectionNextPageBtn";

const PaginationCollection = ({store} ) => {
    const btnNumbers = [];
    for(let i = 1; i <= Math.ceil(store.caughtPokemonIds.length / store.cardsOnPage); i++) {
        btnNumbers.push(i);
    }
    return(
        <div className="pagination pagination-collection">
            <PaginationCollectionPrevPageBtn store={store}/>
            {btnNumbers.map(num => < PaginationCollectionBtn key={num.toString()} num={num} store={store}/>)}
            <PaginationCollectionNextPageBtn store={store}/>
        </div>
    )
}

export default PaginationCollection;