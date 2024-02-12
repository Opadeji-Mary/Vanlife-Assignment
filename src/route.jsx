import React from 'react'
import { Route, Routes,} from 'react-router-dom'
import NavbarTwo from './components/NavbarTwo'
import Signin from './components/Signin'
import About from './components/About'

const route = () => {
  return (
    <>
    <Routes>
      <Route path="/" element={<NavbarTwo /> } />
      
      <Route path="/about" element={<About />} />
    </Routes>
    </>
  )
}

export default route