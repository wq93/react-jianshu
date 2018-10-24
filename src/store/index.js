import {createStore, compose} from 'redux'
import reducer from './_reducer.js'
import * as actionCreators from './actionCreators'
import * as actionTypes from './actionTypes'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, composeEnhancers())

export {store, actionTypes, actionCreators}