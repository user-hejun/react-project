import React from 'react'
import { connect } from 'react-redux'

const CountView = (props: any) => {
  const { count } = props.countReducer
  console.log('props', props);

  return (
    <div>
      { count }
    </div>
  )
}

const mapStateToProps = (state: any) => {
  console.log('state', state)
  return state
}

export default connect(mapStateToProps)(CountView)
