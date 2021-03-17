import * as React from 'react';
import Navbar from "./components/navbar/Navbar";
import Main from "./components/main/Main";
import {BrowserRouter as Router, Route, Switch, Redirect} from "react-router-dom";
import Collection from "./components/collection/Collection";
import Profiles from "./components/profiles/Profiles";
import StartPageModal from "./components/startPageModal/StartPageModal";

const App = ( store )  => {
    return(
        <Router>
            <>
                {store.appStarted && <Navbar />}
                {store.appStarted || <StartPageModal store={store} />}
                    <Switch>
                        <Redirect exact from="/" to={store.pages[0].link} />
                        <Route exact path={store.pages[0].link}>
                            {store.appStarted && <Main store={store}/>}
                        </Route>
                        <Route exact path={store.pages[1].link}>
                            {store.appStarted && <Collection store={store}/>}
                        </Route>
                        <Route path={store.pages[2].link}>
                            {store.appStarted && <Profiles store={store}/>}
                        </Route>
                    </Switch>
            </>
        </Router>
    )
}
export default App;