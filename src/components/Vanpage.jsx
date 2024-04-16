import React, { useEffect } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import './Vannpage.css'
import axios from 'axios'
import { useState } from 'react'


const Vanpage = () => {
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
      {/* {data.map((item, index) => (
            <div key={index}>
                <h1>{item.id}</h1>
            </div>
        ))} */}



      <div>
        <h1 className="text">Explore our van options </h1>
        <button className="btns">Simple</button>
        <button className="btnss">Luxury</button>
        <button className="btnsss">Rugged</button>
        <a href="" className="text-dark">Clear filters</a>
      </div>


      <div className="row">
        {
            data.map((data) => (
              <div className="card col-sm-6 col-md-6 w-50">
                    <div class="">
                      <img src={data.imageUrl} class="card-img-top w-100"></img>
                    </div>
                    <div class="d-flex">
                        <h1>{data.name}</h1>
                        <div className="mx-auto">
                           <h1>{data.price}</h1>
                           <h6>/day</h6>
                        </div>
                    </div>
                    <button className="btns" to="/vavi">{data.type}</button>
                </div>
            ))
        }
      </div> 
    



    
    <Footer></Footer>
    </>
      )
}

      export default Vanpage