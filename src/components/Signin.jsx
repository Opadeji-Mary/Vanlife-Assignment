import React from 'react'
import Footer from './Footer'
import NavbarTwo from './NavbarTwo'

const Signin = () => {
  return (
  <>
  <NavbarTwo></NavbarTwo>
    <div className="p-5">
        <div className="col-8 mx-auto ">
          <h1 className="text-center">Sign in to your account</h1>
            <div className="row">
                <input type="text" placeholder='Email address' className="form-control"/>
                <input type="text" placeholder='Password' className="form-control"/>
                <button className="btn btn-warning">Sign in</button>
            </div>
            <div className="d-flex p-5">
            <h4>Don't have an account?</h4>
            <h4 className="text-warning">create one now</h4>
            </div>
        </div>
    </div>
    <Footer></Footer>
  </>
  )
}

export default Signin