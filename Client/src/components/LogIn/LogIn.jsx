import React, {useState, useContext}from "react";
import { AuthContext } from "../Authv1/AuthContext";



const LogIn = ({setCurrentPage}) => {
  const [email, setEmail] = useState("")
const [password, setPassword] = useState("")
const {login} = useContext(AuthContext)
const submitHandler = (e) =>{
  e.preventDefault()
  login(email, password);
}
  return (
    <div className="col card p-5 text-center"> 
      <div>
        <h3 className="m-3">Login to your account</h3>
        <p className="mb-5">
          Don't have an account?{" "}
          <a
          onClick={() => setCurrentPage('signup')}
            href="#"
            className="fw-semibold  text-decoration-none text-warning"
          >
            Create a new accounts
          </a>
        </p>
      </div>
      <form onSubmit={submitHandler}>
        <div className="d-flex flex-column gap-3">
          <input
            type="email"
            className="form-control p-3"
            placeholder="Email Address"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            className="form-control p-3"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="mt-3">
          <p className="d-flex justify-content-end"> <a href="" className="fw-semibold text-decoration-none text-warning">Forgot Password?</a></p>
        </div>
        <div className="d-grid">
          <button 
          type="submit"
          className="btn btn-primary action-btn fs-5 fw-semibold p-3">Log In</button>
        </div>
      </form>
    </div>
  );
};

export default LogIn;
