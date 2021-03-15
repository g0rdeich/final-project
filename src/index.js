import * as React from 'react';
import * as ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Provider, connect} from 'react-redux';
import {bindActionCreators, createStore} from "redux";
import pageReducer from "./redux/reducer";
import {catchPokemon, changePage} from "./redux/actionCreators";

const store = createStore(pageReducer);

const mapStateToProps = (state) => {
    return {
        ...state
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        changePage: bindActionCreators(changePage, dispatch),
        catchPokemon: bindActionCreators(catchPokemon, dispatch),
    }
}

const Container = connect(mapStateToProps, mapDispatchToProps)(App);

ReactDOM.render(
    <Provider store={store}>
        <Container />
    </Provider>,
    document.querySelector('#root')
);

