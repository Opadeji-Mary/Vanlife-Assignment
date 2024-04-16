import React, { useEffect, useState } from 'react'
import './Vanview.css'
import Navbar from './Navbar'
import Footer from './Footer'
import { Link } from 'react-router-dom'
import arrow from '../assets/arrow-left (1).svg'
import axios from 'axios'

const Vanview = () => {
  const [data, setData] = useState([])
  let Url = "http://localhost:3000/api/vans"
  useEffect(() => {
    axios.get(Url).then((res) => {
      console.log(res.data)
      setData(res.data)
    }).catch((err) => {
      console.log(err)
    }
    )
  }, [])
  return (
    <>
    <Navbar></Navbar>
    
    {
      data.map((data) =>(
       <div>
        <div>
    <Link to="/van" className='text-dark p-5'> <img src={arrow} alt="" /> Back to all vans</Link>
    </div>
      <div className="p-5">
        <img className="figure-img img-fluid rounded h-30 w-100 " src={data.imageUrl} alt="" />
        <div>
          <button className='btnexp'>{data.type}</button>
          <h1 className="htex">{data.name}</h1>
          <h3 className="h3tex">{data.price}</h3>
          <p className="ptext">The Modest Explorer is a van designed to get you out of the house and into nature. This beauty is equipped with solar panels, a composting toilet, a water tank and kitchenette. The idea is that you can pack up your home and escape for a weekend or even longer!</p>
        </div>
        <button className="van">Rent this Van</button>
      </div>
    </div>

      ))
    }
    
    <Footer></Footer>
    </>
  )
}

export default Vanview