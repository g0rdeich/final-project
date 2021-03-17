import React from "react";
import ProfileCard from "./ProfileCard";
import RandomCardBtn from "./RandomCardBtn";

const CardFieldProfile = ( {store} ) => {
    return(
        <div className="card-field">
            <RandomCardBtn store={store}/>
            <ProfileCard store={store} />
        </div>
    )
}

export default CardFieldProfile;