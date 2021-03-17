import React from "react";

const NextBtn = ( {store} ) => {
    return(
        <button className="btn btn-next-profile" onClick={store.goToNextProfile}>→</button>
    )
}

export default NextBtn;