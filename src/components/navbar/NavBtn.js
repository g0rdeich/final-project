import React from "react";
import {NavLink} from "react-router-dom";

const NavBtn = ( {name, link} ) => {
    return(
            <NavLink exact className="nav-link" activeClassName="nav-link nav-link-active" to={link}>{name}
            </NavLink>
    )
}

export default NavBtn;