import {createStore} from 'redux'
import reducer from './_reducer.js'

const store = createStore(reducer)

export default store