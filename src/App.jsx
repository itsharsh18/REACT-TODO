import { useState } from 'react'

import './App.css'
import Addtodo from './components/Addtodo'
import Todos from './components/Todo'

function App() {

  return (
    <>
    <h1>Hello world</h1>
    <Addtodo />
    <Todos />
    </>
  )
}

export default App
