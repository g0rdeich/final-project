import React from "react";
import PaginationCollection from "./paginationCollection/PaginationCollection";
import CardsFieldCollection from "./cardsCollection/CardsFieldCollection";

const Collection = ( {store} ) => {
    return(
        <div className="main">
            < PaginationCollection store={store}/>
            < CardsFieldCollection store={store}/>
        </div>
    )
}

export default Collection;