import * as React from 'react';
import Navbar from "./components/navbar/Navbar";
import {pokemons} from "./info";
import Main from "./components/main/Main";

const App = ( store )  => {
    return(
        <>
            < Navbar />
            < Main pokemons={pokemons} store={store}/>
        </>
    )
}
export default App;