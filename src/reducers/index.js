/**
 * Created by Tal on 7/13/17.
 */

import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import { postLinks, postIsLoading, postFetchHasErrored } from './posts';

const blogApp = combineReducers({
    router: routerReducer,
    postLinks,
    postIsLoading,
    postFetchHasErrored
})

export default blogApp