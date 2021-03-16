import React from "react";

const InfoBtn = ( {id, store}) => {
    return(
        <button className="btn btn-info"
            value={id}
            onClick={store.goToProfile}>Go to profile</button>
    )
}

export default InfoBtn;