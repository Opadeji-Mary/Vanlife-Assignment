import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import './Errorpage.css'

const Errorpage = () => {
  return (
    <>
    <Navbar></Navbar>
    <div className="p-5">
        <h1 className="sorry mx-auto">
        Sorry, the page you were looking for was not found.
        </h1>
        <button className="return" to="/home">Return to home
        {/* <Link class="nav-link active" href="#" to="/home"></Link> */}
        </button>

    </div>
    <Footer></Footer>
    </>
  )
}

export default Errorpage