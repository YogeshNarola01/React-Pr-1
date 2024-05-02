import { useState } from 'react'
import Classdata from './classdata'
import { Data } from './data'
import Funcdata from './record'
import './data.css'

function App() {
  const [count, setCount] = useState(0)
  return (
    <>
    <Classdata/>
    <Funcdata data={Data}/>
    </>
  )
}

export default App
