import React from 'react'
import NavbarTwo from '../components/NavbarTwo'
import Footer from '../components/Footer'
import './Host.css'
import Navlinks from './Navlinks'
import imag1 from '../assets/Rectangle 162.jpg'
import imag2 from '../assets/Rectangle 163.png'
import imag3 from '../assets/Rectangle 156.png'

const Host = () => {
  return (
    <>
    <NavbarTwo></NavbarTwo>
    <div>
      <Navlinks></Navlinks>
      <div>
      <div>
          <div className="wel">
              <h1>Welcome!</h1>
             <div className='d-flex'>
               <p>Income last <a href="">30 days</a> </p>
               <p>Details</p>
             </div>

             <div className="amo">
               <h1>$2,260</h1>
             </div> <br /> <br /> <br />

             <div className="wel2 d-flex">
               <p>Review score  5.0/5</p>
               <p className="deta">Details</p>
              </div>
          </div> <br />
      </div>

      <div className="line">
            <div className="d-flex">
               <div className="list">
               <h3>Your listed vans</h3>
             </div>  
   
              <div className="ph">
                <h3 className="">view all</h3>
              </div>
               </div>

              <div>
              <div className="imgdash">
                  <div>
                    <img src={imag1} className="" />
                  </div>
                  <div className="prices">
                    <h2>Modest Explorer</h2>
                    <p>$60/days</p>
                 </div>
              </div>
  
            <div className="imgdash">
                <div>
                   <img src={imag2} className=""  />
                </div>
                <div className="prices">
                  <h2>Beach Bum</h2>
                  <p>$80/days</p>
                </div>
            </div>

            <div className="imgdash">
                 <div>
                   <img src={imag3} className="" />
                 </div>
                 <div className="prices">
                   <h2>Green Wonder</h2>
                   <p>$70/days</p>
                 </div>
            </div>
      </div>
              
      </div>

     
      </div>
  </div>
    <Footer></Footer>
    </>
  )
}

export default Host