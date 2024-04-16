import React from 'react'
import NavbarTwo from '../components/NavbarTwo'
import Footer from '../components/Footer'
import Navlinks from './Navlinks'

const Income = () => {
  return (
  <>
  <NavbarTwo></NavbarTwo>
  <div>
    <Navlinks></Navlinks>
    <div>
      <div>
        <h1>Income</h1>
      </div>
    <div>last <a href="">30 days</a>
    <div>
      <div>
        <h1>$720</h1>
        <p>1/1| 22</p>
      </div>
      <div>
        <h1>$560</h1>
        <p>10/11|22</p>
      </div>
      <div>
        <h1>$980</h1>
        <p>23/11|22</p>
      </div>
    </div>
    </div>

    <div>
      <h1>$2,260</h1>
    </div>

    <div>
      <h3>Your transaction (3)</h3>
    </div>
    </div>
  </div>
  <Footer></Footer>
  </>
  )
}

export default Income