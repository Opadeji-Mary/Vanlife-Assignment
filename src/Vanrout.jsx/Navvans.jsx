import React from 'react'
import { Link } from 'react-router-dom'

const Navvans = () => {
  return (
    <div>
        <div>
        <nav className="nav">
      <Link  to="/van/dashboard" className="nav-link active">Details</Link>
      <Link  to="/van/income" className="nav-link">Pricing</Link>
      <Link  to="/van/Vans" className="nav-link">Photo</Link>
    </nav>
        </div>
    </div>
  )
}

export default Navvans