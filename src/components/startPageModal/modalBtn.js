import React from "react";

const ModalBtn = ( {store} ) => {
    return(
        <button onClick={store.startApp} className="btn btn-modal">Start</button>
    )
}

export default ModalBtn;