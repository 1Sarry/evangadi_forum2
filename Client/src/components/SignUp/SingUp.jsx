import React, {useState, useContext} from 'react'
import { AuthContext } from '../Authv1/AuthContext'


const SingUp = ({setCurrentPage}) => {
   
  const [user, setUser] = useState({
    firstName:"",
    lastName:"",
    email:"",
    password:""
  })

  const {signup} = useContext(AuthContext) 
  const handleSubmit= (e)=>{
    e.preventDefault()
    signup(user.firstName, user.lastName, user.email, user.password)
  }
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
    <form onSubmit={handleSubmit}>
      <div className="d-flex flex-column gap-3">
        <input
          type="email"
          className="form-control p-3"
          placeholder="Email Address"
          onChange={(e) => setUser((prev)=>{
            return{
              ...prev,
              email: e.target.value
            }
          }) }
        />
        <div className='d-flex gap-4'>
        <input
          type="text"
          className="form-control p-3"
          placeholder="First Name"
          onChange={(e) => setUser((prev)=>{
            return{
              ...prev,
              firstName: e.target.value
            }
          }) }
        />
        <input
          type="text"
          className="form-control p-3"
          placeholder="Last Name"
          onChange={(e) => setUser((prev)=>{
            return{
              ...prev,
              lastName: e.target.value
            }
          }) }
        /> 
        </div>
        <input
          type="password"
          className="form-control p-3"
          placeholder="Password"
          onChange={(e) => setUser((prev)=>{
            return{
              ...prev,
              password: e.target.value
            }
          }) }
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