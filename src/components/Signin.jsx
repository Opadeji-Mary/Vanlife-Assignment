import React from 'react'
import Footer from './Footer'
import NavbarTwo from './NavbarTwo'
import { useFormik } from 'formik'
import { Link } from 'react-router-dom'

const Signin = () => {
  
  const formik = useFormik({
    initialValues:{
      Email:"",
      password:""
    },
    onSubmit : (values) =>{
      console.log(values)
    }
  })
  // console.log(formik.values)
  return (
  <>
  <NavbarTwo></NavbarTwo>
    <div className="p-5">
        <div className="col-8 mx-auto ">
          <h1 className="text-center">Sign in to your account</h1>
          <form action="" onSubmit={formik.handleSubmit}>
            <div className="row">
                <input 
                 type="text" 
                onChange={formik.handleChange}
                placeholder='Email address' 
                className="form-control"
                name="Email"
                />
                <input 
                type="text" 
                onChange={formik.handleChange}
                placeholder='Password' 
                className="form-control"
                name="password"
                />
                <button className="btn btn-warning" type="submit">Sign in</button>
            </div>
            </form>
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