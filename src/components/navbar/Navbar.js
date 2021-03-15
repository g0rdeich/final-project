import React from "react";
import NavBtn from "./NavBtn";
import {useSelector} from "react-redux";

const Navbar = ( ) => {
    const buttons = useSelector(store => store.navButtons);
    return(
        <div className="navbar">
            {buttons.map(btn => < NavBtn key={btn} name={btn} />)}
        </div>
    )
}

export default Navbar;