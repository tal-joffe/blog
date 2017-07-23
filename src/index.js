import './style/index.css';
import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import { Provider, connect } from 'react-redux';
// import { combineReducers, createStore } from 'redux';
import { ConnectedRouter } from 'react-router-redux'
import App from './App'
import store, { history } from './store'


//todo: use code from here: https://github.com/misterfresh/react-drive-cms to write methods to get data from google Drive and render as post content


ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
        <App />
        </ConnectedRouter>
    </Provider>,
    document.getElementById('root')
)