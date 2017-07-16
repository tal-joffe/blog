import './style/index.css';
import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import { Provider, connect } from 'react-redux';
// import { combineReducers, createStore } from 'redux';
import { ConnectedRouter } from 'react-router-redux'
import App from './App'
import store, { history } from './store'



//todo: consider https://wix.github.io/react-templates/



ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
        <App />
        </ConnectedRouter>
    </Provider>,
    document.getElementById('root')
)