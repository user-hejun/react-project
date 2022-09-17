import React, { useState, Suspense } from 'react'
import { useRoutes, } from 'react-router-dom'
import router from './router'

import reactLogo from './assets/react.svg'
import './App.css'

import { Provider } from 'react-redux'
import store from './store'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Provider store={store}>
      <Suspense fallback={<>loading...</>}>
        { useRoutes(router) }
      </Suspense>
    </Provider>
    
  )
}

export default App
