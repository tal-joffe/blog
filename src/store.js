/**
 * Created by Tal on 7/16/17.
 */

import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import createHistory from 'history/createBrowserHistory'
import rootReducer from './reducers'
import posts from './data/posts.json'
export const history = createHistory()

const initialState = {
    postLinks: posts
}

const store = createStore(
    rootReducer,
    initialState,
    applyMiddleware(thunk)
)

export default store