import React from "react";

const NextBtn = ( {store} ) => {
    return(
        <button onClick={store.goToNextProfile}>→</button>
    )
}

export default NextBtn;