
import { combineReducers } from 'redux'
import countReducer from './countReducer'
import bookReducer from './bookReducer'

const rootReducer = combineReducers({
  countReducer,
  bookReducer
})

export default rootReducer