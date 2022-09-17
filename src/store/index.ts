import { createStore } from 'redux'
// import { reducer } from '../reducer'
import rootReducer from './reducer'

const store = createStore(rootReducer)

export default store