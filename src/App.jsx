import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TopSection from '../Components/navbar'
import About from '../Components/main-body'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <TopSection/>
    <About/>
    </>
)
}

export default App
