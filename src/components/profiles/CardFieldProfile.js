import React from "react";
import ProfileCard from "./ProfileCard";

const CardFieldProfile = ( {store} ) => {
    return(
        <div className="card-field">
            <ProfileCard store={store} />
        </div>
    )
}

export default CardFieldProfile;