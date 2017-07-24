/**
 * Created by Tal on 7/16/17.
 */

import { createStore, applyMiddleware, compose } from 'redux'
import { routerMiddleware } from 'react-router-redux'
import thunk from 'redux-thunk'
import createHistory from 'history/createBrowserHistory'
import rootReducer from './reducers'
export const history = createHistory()

//todo: get initial state from somwhere (config? google drive list?)

//get list of files under data folder
//parse id,title and driveID(file path) and use to store as initial state

const initialState = {//todo: get this from config or something..
    // postLinks: [{id:123, title:'post1', driveID: getPostFromMd(), show: true},{id:124, title:'post2', driveID: 'fhsdnsdn', show: false},{id:125, title:'post3', driveID: '354ehrgsfb4hdf', show: false}]
    postLinks: [
        {id:123, title:'post1', driveID: "0B_h-DIXAPVoiSlRBSzJYNEdPaEE", content:null, show: true},
        {id:124, title:'post2', driveID: '0B_h-DIXAPVoiaEZSUlRiOFBHaFk', content:null, show: false},
        {id:125, title:'post3', driveID: '0B_h-DIXAPVoiYVhwNF9ZazZHZ2c', content:null, show: false},
        {id:126, title:'post4', driveID: '16QIUK3dv6YEWbegNx9-QyE9zYSxAqYMf2KxGG3HpvRM', content:null, show: false}
    ]
}

const store = createStore(
    rootReducer,
    initialState,
    applyMiddleware(thunk)
)

export default store