import React from 'react'
import NavbarTwo from '../components/NavbarTwo'
import Footer from '../components/Footer'
import Navlinks from './Navlinks'
import rate from '../assets/Group 314.jpg'

const Review = () => {
  return (
    <>
    <NavbarTwo></NavbarTwo>
    <div>
      <Navlinks></Navlinks>
      <div>
        <div>
          <h1>Your Reviews last <a href="">30 days</a></h1>
          <img src={rate} alt="" />
        </div>
        <div>
          <h2>Reviews(2)</h2>
          <div className="stars">
          <i class="bi bi-star"></i>
          <i class="bi bi-star"></i>
          <h3>Eilot 
            <p className="">Drcember 1, 2022</p>
          </h3>
          <h4>The beach bum is such as awesome van! Such as comfortable trip. We had it for 2 weeks and there was not a single issue. Super clean when we picked it up and the host is very comfortable and understanding. Highly recommend!</h4>
          </div>
          <hr />
          <div>
            <h3>November,23.2022</h3>
            <h4>This is our third time using the Modest Explorer for our travels and we love it! No complaints, absolutely perfect!</h4>
          </div>
          <hr />
        </div>
      </div>
    </div>
    <Footer></Footer>
    </>
  )
}

export default Review