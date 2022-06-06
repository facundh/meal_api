import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import Principal from './components/Principal'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Principal />
  )
}

export default App
