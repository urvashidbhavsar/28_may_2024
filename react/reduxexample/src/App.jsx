import React from 'react'
import Addtodo from './Pages/Addtodo'
import Showtodo from './Pages/Showtodo'
import { Provider } from 'react-redux'
import { store } from './store/store'

const App = () => {
  return (
    <>
      {/* <Provider store={store}>
        <Addtodo />
        <Showtodo />
      </Provider> */}

      <Addtodo />
      <Showtodo />
    </>
  )
}

export default App
