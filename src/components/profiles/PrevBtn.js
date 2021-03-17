import React from "react";

const PrevBtn = ( {store} ) => {
    return(
        <button className="btn btn-prev-profile" onClick={store.goToPrevProfile}>←</button>
    )
}

export default PrevBtn;