import React from "react";
import {Link} from "react-router-dom";

const InfoBtnCollection = ({id, store} ) => {
    return(
        <Link className="link-to-profile"
            id={id} to={store.pages[2].link} onClick={store.goToProfile}>Go to profile</Link>
    )
}

export default InfoBtnCollection;