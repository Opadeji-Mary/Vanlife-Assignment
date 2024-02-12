import React from 'react'
import { Link } from 'react-router-dom'

const Navlinks = () => {
  return (
    <div>
    <nav class="nav">
      <Link  to="/host/dashboard" class="nav-link active">Dashoard</Link>
      <Link  to="/host/income" class="nav-link">Income</Link>
      <Link  to="/host/Vans" class="nav-link">vans</Link>
      <Link  to="/host/Review" class="nav-link">Review</Link>
    </nav>
    </div>
  )
}

export default Navlinks