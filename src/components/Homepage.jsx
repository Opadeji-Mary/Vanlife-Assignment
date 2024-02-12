import React from 'react'
import '../index.css'
import image from '../assets/image 54.png'
import Navbar from './Navbar'
import Footer from './Footer'
import './Homepage.css'

const Homepage = () => {
  return (
<>
<Navbar></Navbar>
    <div>
        <div>
        <img src={image} className="" alt="" />
        <div className="content">
        <h1 className="text">You got the travel plans, we got the travel vans</h1>
        <h4 className="hh">Add adventure to your life by joining the #vanlife movement. Rent the perfect vans to make your perfect road trip</h4>
         <button className="bt">Find your van trip</button>
        </div>
        </div>
    </div>

  <Footer></Footer>
</>  
  )
}

export default Homepage