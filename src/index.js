
import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import { Provider, connect } from 'react-redux';
import { combineReducers, createStore } from 'redux';
import ContentContainer from './containers/ContentContainer'
import VisiblePostsList from './containers/VisiblePostsList'
import blogApp from './reducers'
import App from './App'



//todo: consider https://wix.github.io/react-templates/

const initialState = {//todo: get this from config or something..
    postLinks: [{id:123, text:'hello', completed: false},{id:124, text:'hi', completed: false},{id:125, text:'previet', completed: false}]
};

ReactDOM.render(
    <Provider store={createStore(blogApp,initialState)}>
        <App />
    </Provider>,
    document.getElementById('root')
)