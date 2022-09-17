import { COUNT_ADD } from '../actionTypes'
const initStae = {
  count: 0,
}
interface Action {
  type: string
  [key:string]: any
}
const CountReducer = (state = initStae, action: Action) => {
  switch (action.type) {
    case 'COUNT_ADD': 
      return {
        count: state.count + action.payload.add
      }
    default: 
      return state
  }
}

export default CountReducer
