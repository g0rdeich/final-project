import React from "react";
import {NavLink} from "react-router-dom";

const NavBtn = ( {name, link} ) => {
    return(
        <div className="btn-navbar">
            <NavLink exact activeClassName="btn-nav-active" to={link}>{name}
            </NavLink></div>
    )
}

export default NavBtn;