import { useState } from 'react'
import './App.css'
import Cards from './Componets/Cards/Cards'
function App() {
  // eslint-disable-next-line no-unused-vars
  const [count, setCount] = useState(0)

  return (
    <>
     <h1 className='container mx-auto mt-10 text-center text-[#1C1B1B] font-bold text-3xl '>Course Registration</h1>
     <Cards></Cards>
     
    </>
  )
}

export default App
