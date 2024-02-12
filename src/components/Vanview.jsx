import React from 'react'
import image from '../assets/Rectangle 162.jpg'
import './Vanview.css'
import Navbar from './Navbar'
import Footer from './Footer'
import { Link } from 'react-router-dom'
import arrow from '../assets/arrow-left (1).svg'

const Vanview = () => {
  return (
    <>
    <Navbar></Navbar>
    <div>
    <Link to="/van" className='text-dark p-5'> <img src={arrow} alt="" /> Back to all vans</Link>
    </div>
    <div>
      
    
      <div className="p-5">
        <img className="figure-img img-fluid rounded h-30 w-100 " src={image} alt="" />
        <div>
          <button className='btnexp'>Simple</button>
          <h1 className="htex">Modest Explorer</h1>
          <h3 className="h3tex">$60/day</h3>
          <p className="ptext">The Modest Explorer is a van designed to get you out of the house and into nature. This beauty is equipped with solar panels, a composting toilet, a water tank and kitchenette. The idea is that you can pack up your home and escape for a weekend or even longer!</p>
        </div>
        <button className="van">Rent this Van</button>
      </div>
    </div>
    <Footer></Footer>
    </>
  )
}

export default Vanview