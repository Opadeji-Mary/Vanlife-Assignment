import React from 'react'
import image from '../assets/image 55.jpg'
import Navbar from './Navbar'
import Footer from './Footer'
import './About.css'

const About = () => {
  return (
    <>
    <Navbar></Navbar>
    <div className="all">
     <div>
        <img src={image} alt="" />
    </div>
    <div className="allto">
      <h2 className="text1">Don't squeeze in a sedan when you could  in a van.</h2>
      <div className="text">
         <p>Our mission is to envilen your road trip with the perfect travel <br /> van rental. Our vans are recertified 
          before each trip to ensure <br /> your travel plans can go off without hitch. (Hitch cost extra)
         </p>
         <p>Our team is full of Vanlife emthusiasts know firsthand the <br /> magic of touring the world on 4 wheels.</p>
      </div>
      

          <div>
    
             <div className="card-body"> 
              <p className="card-text">Your destination is waiting. <br /> Your van is ready. </p>
              <a href="#" className="btn btn-dark">Explore our vans</a>
             </div>
          
          </div>
    </div>
    </div>
    <Footer></Footer>
    </>
  )
}

export default About