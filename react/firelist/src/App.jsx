import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import Addtodos from './todoapp/Addtodos'
import Showtodos from './todoapp/Showtodos'
import Todos from './todoapp/Todos'

const App = () => {
  return (
    <>
      <Addtodos />
      {/* <Showtodos /> */}
      <Todos />
    </>
  )
}

export default App
