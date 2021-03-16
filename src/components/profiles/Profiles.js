import React from "react";
import CardFieldProfile from "./CardFieldProfile";
import PrevBtn from "./PrevBtn";
import NextBtn from "./NextBtn";

const Profiles = ( {store} ) => {
    return(
        <div className="profiles-container">
            <PrevBtn store={store}/>
            <CardFieldProfile store={store}/>
            <NextBtn store={store}/>
        </div>
    )
}

export default Profiles;