import React from "react";
import ModalBtn from "./modalBtn";

const StartPageModal = ( {store} ) => {
    return(
        <div className="start-page-modal">
            <ModalBtn store={store}/>
        </div>
    )
}

export default StartPageModal;