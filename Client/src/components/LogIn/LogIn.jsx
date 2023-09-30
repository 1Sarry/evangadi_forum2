import React from "react";

const LogIn = ({setCurrentPage}) => {
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
      <form action="">
        <div className="d-flex flex-column gap-3">
          <input
            type="email"
            className="form-control p-3"
            placeholder="Email Address"
          />
          <input
            type="password"
            className="form-control p-3"
            placeholder="Password"
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
