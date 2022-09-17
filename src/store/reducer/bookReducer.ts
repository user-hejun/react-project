import { BOOK_ADD } from '../actionTypes'
const initStae = {
  books: ['哈利波特', '月光森林'],
}

const bookReducer = (state = initStae, action: any) => {
  console.log('action', action, state)
  switch (action.type) {
    case BOOK_ADD:
      return {
        books: [ ...state.books, action.paylod]
      }
    default: 
      return state
  }
}

export default bookReducer