import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/logog.png'

const NavbarTwo = () => {
  return (
    <div>
     <nav class="navbar bg-body-tertiary">
     <div class="container-fluid">
    <img class="navbar-brand" to="/" src={logo} width="100px" />
     <nav class="navbar navbar-expand-lg bg-body-tertiary">
     <div class="container-fluid">
     <div class="navbar-nav">
        <Link class="nav-link active" href="#" to="/host">Host</Link>
        <Link class="nav-link active" aria-current="page" to="/about">About</Link>
        <Link class="nav-link active" href="#" to="/van">Van</Link>
      </div>
  </div>
</nav>  
  </div>
</nav>
    </div>
  )
}

export default NavbarTwo