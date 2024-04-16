import React from 'react'
import NavbarTwo from '../components/NavbarTwo'
import Footer from '../components/Footer'
import { NavLink } from 'react-router-dom'

const Vanrout = () => {
  return (
    <>
    <NavbarTwo></NavbarTwo>
    <div>
    <NavLink></NavLink>
    <div>
        <div>
            <img src="" alt="" />
        </div>
        <div>
            <button>Simple</button>
           <h1>
           Modest Explorer
           </h1>
           <h3>$60/day</h3>
        </div>
    </div>
    </div>
    <Footer></Footer>
    </>
  )
}

export default Vanrout