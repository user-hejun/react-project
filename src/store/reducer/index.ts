// const initStae = {
//   count: 0,
// }
// interface Action {
//   type: string
//   [key:string]: any
// }
// export const reducer = (state = initStae, action: Action) => {
//   console.log('action', action);
//   switch (action.type) {
//     case 'add_action': 
//       return {
//         count: state.count + action.payload.add
//       }
//     default: 
//       return state
//   }
    
// }

import { combineReducers } from 'redux'
import countReducer from './countReducer'
import bookReducer from './bookReducer'

const rootReducer = combineReducers({
  countReducer,
  bookReducer
})

export default rootReducer