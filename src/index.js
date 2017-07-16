
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
    postLinks: [{id:123, title:'post1', content: 'blablablbalabl', show: true},{id:124, title:'post2', content: 'fhsdnsdn', show: false},{id:125, title:'post3', content: '354ehrgsfb4hdf', show: false}]
};

ReactDOM.render(
    <Provider store={createStore(blogApp,initialState)}>
        <App />
    </Provider>,
    document.getElementById('root')
)