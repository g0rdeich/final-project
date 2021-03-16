import React from "react";
import CardsField from "./cards/CardsField";
import PaginationMain from "./pagination/PaginationMain";

const Main = ( {store} ) => {
    return(
        <div className="main">
            < PaginationMain store={store}/>
            < CardsField store={store}/>
        </div>
    )
}

export default Main;