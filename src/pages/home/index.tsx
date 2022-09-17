import React from 'react'
import { Link } from 'react-router-dom'
import AddCount from '../addCount'
import CountView from '../countView'
import { connect } from 'react-redux'

const Home = (props: any) => {
  console.log('propsHome', props);
  const { bookReducer, sendAddBook } = props;
  const addBook = () => {
    sendAddBook('人性的弱点')
  }
  return (
    <>
      <div>
        <p>home page</p>
        <Link to="/about">about</Link>
        <AddCount />
        <CountView />
        <button onClick={addBook}>add book</button>
        { bookReducer.books.join(',') }
      </div>
    </>
  )
}

const mapStateToProps = (state: any) => {
  return state
}

const mapDispatchToProps = (dispatch: any) => {
  return {
    sendAddBook: (paylod: any) => {
      dispatch({
        type: 'BOOK_ADD',
        paylod
      })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);