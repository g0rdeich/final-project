import React from "react";

const RandomCardBtn = ( {store} ) => {
    return (
        <button onClick={store.goToRandomProfile}>Go to random pokemon profile</button>
    )
}

export default RandomCardBtn;