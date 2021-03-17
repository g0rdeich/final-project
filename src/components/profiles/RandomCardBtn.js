import React from "react";

const RandomCardBtn = ( {store} ) => {
    return (
        <button className="btn btn-random-profile" onClick={store.goToRandomProfile}>Go to random pokemon profile</button>
    )
}

export default RandomCardBtn;