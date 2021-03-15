import React from "react";
import Pagination from "./pagination/Pagination";
import CardsField from "./cards/CardsField";

const Main = ( {store} ) => {
    return(
        <div className="main">
            < Pagination store={store}/>
            < CardsField store={store}/>
        </div>
    )
}

export default Main;