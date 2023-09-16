import { useState } from 'react'
import './App.css'
import Cards from './Componets/Cards/Cards'
import Navbar from './Componets/Navbar/navbar'
function App() {
  // eslint-disable-next-line no-unused-vars
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar></Navbar>
     <h1 className='container mx-auto mt-10 font-bold text-3xl '></h1>
     <Cards></Cards>
   
     
    </>
  )
}

export default App
