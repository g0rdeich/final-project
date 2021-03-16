import React from "react";

const PrevBtn = ( {store} ) => {
    return(
        <button onClick={store.goToPrevProfile}>←</button>
    )
}

export default PrevBtn;