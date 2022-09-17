import React, { Dispatch } from 'react'
import { Button } from 'antd'

import { connect } from 'react-redux'

const AddCount = (props: any) => {
  const handleClick = () => {
    const { sendAction } = props
    console.log('props', props)
    sendAction({add: 2})
  }
  return (
    <div> 
      <Button type="primary" onClick={handleClick}>+</Button>
    </div>
  )
}

const mapDispatchToProps = (dispatch: any) => {
  return {
    sendAction: (payload: object) => {
      dispatch({
        type: 'COUNT_ADD',
        payload
      })
    }
  }
} 

export default connect(null, mapDispatchToProps)(AddCount)
