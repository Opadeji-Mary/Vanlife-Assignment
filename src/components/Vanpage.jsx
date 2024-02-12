import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import './Vannpage.css'
import image1 from '../assets/Rectangle 162.jpg'
import image2 from '../assets/Rectangle 163.png'
import image3 from '../assets/alpert-wang-rxQL0ieF_Bs-unsplash 2.png'
import image4 from '../assets/image 57.jpg'
import image5 from '../assets/Rectangle 155.png'
import image6 from '../assets/Rectangle 156.png'

const Vanpage = () => {
  return (
    <>
    <Navbar></Navbar>
    <h1 className="text">Explore our van options </h1>
    <div>
      <button className="btns">Simple</button>
      <button className="btnss">Luxury</button>
      <button className="btnsss">Rugged</button>
      <a href="" className="text-dark">Clear filters</a>
    </div>
    <div>
    <div class="row row-cols-1 row-cols-md-2 g-4">
  <div class="col">
    <div class="card">
      <img src={image1} class="card-img-top w-100"></img>
    </div>
    <div class="d-flex">
        <h1 class="">Modest explore</h1>
        <div className="mx-auto">
        <h1>$60</h1>
        <h6>/day</h6>
        </div>
      </div>
    <button className="btns" to="/view">Simple</button>
  </div>
  <div class="col">
    <div class="card">     
      <img src={image2} class="card-img-top w-100"></img>
    </div>
    <div class="card-bod d-flex">
        <h1 class="">Beach Bum</h1>
        <div className="mx-auto">
        <h1>$80</h1>
        <h6>/day</h6>
        </div>
      </div>
    <button className="btn btn-success">Rugged</button>
  </div>
  <div class="col">
    <div class="card">
      <img src={image3} class="card-img-top w-100"></img>
    </div>
    <div class="d-flex">
        <h1 class="card-title">Reliable Red</h1>
        <div className="mx-auto">
        <h1>$60</h1>
        <h6>/day</h6>
        </div>
      </div>
    <button className="btn btn-dark">Luxury</button>
  </div>
  <div class="col">
    <div class="card">
      <img src={image4} class="card-img-top w-"></img>
    </div>
    <div class="d-flex">
        <h1 class="card-title">Dreamfinder</h1>
        <div className="mx-auto">
        <h1>$60</h1>
        <h6>/day</h6>
        </div>
      </div>
    <button className="btns">Simple</button>
  </div>
  <div class="col">
    <div class="card">
      <img src={image5} class="card-img-top w-"></img>
    </div>
    <div class="d-flex">
        <h1 class="card-title">The cruiser</h1>
        <div className="mx-auto">
        <h1>$60</h1>
        <h6>/day</h6>
        </div>
      </div>
    <button className="btn btn-dark">Luxury</button>
  </div>
  <div class="col">
    <div class="card">
      <img src={image6} class="card-img-top w-"></img>
    </div>
    <div class="d-flex">
        <h1 class="card-title">Green Wonder</h1>
        <div className="mx-auto">
        <h1>$60</h1>
        <h6>/day</h6>
        </div>
      </div>
    <button className="guyhgy btn btn-success">Rugged</button>
  </div>
</div>
    </div>
    <Footer></Footer>
    </>
  )
}

export default Vanpage