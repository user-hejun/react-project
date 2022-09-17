import React from 'react'
import { connect } from 'react-redux'

const CountView = (props: any) => {
  const { countReducer } = props
  return (
    <div>
      { countReducer.count }
    </div>
  )
}

const mapStateToProps = (state: any) => {
  return state
}

export default connect(mapStateToProps)(CountView)
