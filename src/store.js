/**
 * Created by Tal on 7/16/17.
 */

import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import createHistory from 'history/createBrowserHistory'
import rootReducer from './reducers'
import posts from './data/posts.json'
export const history = createHistory()

//todo: get initial state from somwhere (config? google drive list?)

//get list of files under data folder
//parse id,title and driveID(file path) and use to store as initial state

const initialState = {
    postLinks: posts
}

const store = createStore(
    rootReducer,
    initialState,
    applyMiddleware(thunk)
)

export default store