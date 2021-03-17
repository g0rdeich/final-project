import React from "react";
import ModalBtn from "./modalBtn";

const StartPageModal = ( {store} ) => {
    return(
        <div className="start-page-modal">
            <p className="welcome">Welcome to Pokedex! Press start</p>
            <span className="arrow-down">🠗</span>
            <ModalBtn store={store}/>
        </div>
    )
}

export default StartPageModal;