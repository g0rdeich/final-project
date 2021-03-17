import * as React from 'react';
import * as ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Provider, connect} from 'react-redux';
import {bindActionCreators, createStore} from "redux";
import pageReducer from "./redux/reducer";
import {
    catchPokemon,
    changePageCollection,
    changePageMain,
    goToNextProfile,
    goToPrevProfile,
    goToProfile, startApp
} from "./redux/actionCreators";
import {BrowserRouter as Router} from "react-router-dom";

const store = createStore(pageReducer);

const mapStateToProps = (state) => {
    return {
        ...state
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        changePageMain: bindActionCreators(changePageMain, dispatch),
        changePageCollection: bindActionCreators(changePageCollection, dispatch),
        catchPokemon: bindActionCreators(catchPokemon, dispatch),
        goToProfile: bindActionCreators(goToProfile, dispatch),
        goToPrevProfile: bindActionCreators(goToPrevProfile, dispatch),
        goToNextProfile: bindActionCreators(goToNextProfile, dispatch),
        startApp: bindActionCreators(startApp, dispatch),
    }
}

const Container = connect(mapStateToProps, mapDispatchToProps)(App);

ReactDOM.render(
    <Router>
        <Provider store={store}>
            <Container />
        </Provider>
    </Router>,
    document.querySelector('#root')
);

