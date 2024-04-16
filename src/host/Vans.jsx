import React from 'react'
import NavbarTwo from '../components/NavbarTwo'
import Footer from '../components/Footer'
import Navlinks from './Navlinks'
import imag from '../assets/Rectangle 162.jpg'
import imag1 from '../assets/Rectangle 163.png'
import imag2 from '../assets/Rectangle 156.png'
import '../host/Van.css'


const Vans = () => {
  return (
    <>
    <NavbarTwo></NavbarTwo>
    <div>
      <Navlinks></Navlinks>
      <div className="ali p-5">
       <div className="imatex" to="/host/vans/123">
       <div>
          <img src={imag} alt="" />
        </div>
        <div className="price">
          Modest explorer
          <p>$60/days</p>
        </div>
       </div>
       <br />
        <div className="imatex">
        <div>
          <img src={imag1} alt="" />
        </div>
        <div className="price">
          Beach Bum
          <p>$80/days</p>
        </div>
        </div>
        <br />
        <div className="imatex">
        <div>
          <img src={imag2} alt="" />
        </div>
        <div className="price">
          Green Wonder
          <p>$80/days</p>
        </div>
        </div>
      </div>
    </div>
    <Footer></Footer>
    </>
  )
}

export default Vans