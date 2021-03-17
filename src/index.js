import * as React from 'react';
import * as ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Provider, connect} from 'react-redux';
import { store } from "./redux/storeCreator";
import {BrowserRouter as Router} from "react-router-dom";
import { mapStateToProps, mapDispatchToProps } from "./redux/mapToProps";

const Container = connect(mapStateToProps, mapDispatchToProps)(App);

ReactDOM.render(
    <Router>
        <Provider store={store}>
            <Container />
        </Provider>
    </Router>,
    document.querySelector('#root')
);

