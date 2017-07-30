import './style/index.css';
import React from 'react';
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux';
// import { combineReducers, createStore } from 'redux';
import { ConnectedRouter } from 'react-router-redux'
import App from './App'
import store, { history } from './store'


//todo: add proptyes to all relevant components
//todo: consider moving scrolling to


ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
        <App />
        </ConnectedRouter>
    </Provider>,
    document.getElementById('root')
)