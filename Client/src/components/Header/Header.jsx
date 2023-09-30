import React from 'react'
import logo from "../../assets/evangadi-logo-home.png"
const Header = () => {
  return (
    <div>
        <nav className="navbar p-3 navbar-expand-lg ">
  <div className="container">
    <a className="navbar-brand" href="#"><img src={logo} alt="" /></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse justify-content-end fw-semibold " id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item  d-flex align-items-center">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item d-flex align-items-center">
          <a className="nav-link" href="#">How It Works</a>
        </li>
        <li className="nav-item d-flex align-items-center">
          <a className="nav-link" href="#"><button  className='btn btn-primary fw-bold px-5 action-btn'>Sign In</button></a>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Header