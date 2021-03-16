import * as React from 'react';
import Navbar from "./components/navbar/Navbar";
import {pokemons} from "./info";
import Main from "./components/main/Main";
import {BrowserRouter as Router, Route, Switch, Redirect} from "react-router-dom";
import Collection from "./components/collection/Collection";

const App = ( store )  => {
    return(
        <Router>
            <>
                <Navbar />
                    <Switch>
                        <Redirect exact from="/" to="/main" />
                        <Route exact path="/main">

                            <Main store={store}/>
                        </Route>
                        <Route exact path="/collection">
                            <Collection store={store}/>
                        </Route>
                    </Switch>
            </>
        </Router>
    )
}
export default App;