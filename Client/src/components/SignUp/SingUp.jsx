import React, {useState, useContext} from 'react'
import { AuthContext } from '../Authv1/AuthContext'
const SingUp = ({setCurrentPage}) => {
  const {signup} = useContext(AuthContext)  
  return (
    <div className="col card p-5 text-center">
    <div>
      <h3 className="m-3">Join the Network</h3>
      <p className="mb-5">
        Already have an account?{" "}
        <a
        onClick={()=>setCurrentPage('login')}
          href="#"
          className="fw-semibold  text-decoration-none text-warning"
        >
          Sign In
        </a>
      </p>
    </div>
    <form action="">
      <div className="d-flex flex-column gap-3">
        <input
          type="email"
          className="form-control p-3"
          placeholder="Email Address"
        />
        <div className='d-flex gap-4'>
        <input
          type="text"
          className="form-control p-3"
          placeholder="First Name"
        />
        <input
          type="text"
          className="form-control p-3"
          placeholder="Last Name"
        /> 
        </div>
        <input
          type="password"
          className="form-control p-3"
          placeholder="Password"
        />
      </div>
      <div className="p-3">
        <small className="d-flex justify-content-center">I agree to the <a href=""className='px-1 text-warning'> privacy policy </a> and <a href="" className='px-1 text-warning'> terms of service.</a> </small>
      </div>
      <div className="d-grid">
        <button 
        type="submit"
        className="btn btn-primary action-btn fs-5 fw-semibold p-3">Agree and Join</button>
      </div>
      <div className="mt-3">
        <p className="d-flex justify-content-center"> <a onClick={()=>setCurrentPage("login")} href="" className="fw-semibold text-decoration-none text-warning">Already have an account</a></p>
      </div>
    </form>
  </div>
  ) 
}

export default SingUp