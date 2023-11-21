import React, { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../Header/Header";
import { Link } from "react-router-dom";
import { AuthContext } from "../Authv1/AuthContext";
import Cookies from "js-cookie";
import { axiosInstance, endPoint } from "../../endPoint/api";
const AskQuestion = () => {
  return (
    <>
      <Header />
      <div className="bg-body-tertiary pb-5">
        <div className="container py-5 ">
          <div className="d-flex flex-column align-items-center">
            <h3>Steps to Write a Good Question</h3>
            <ul>
              <li className="text-secondary">Summerize your problem in a one-line title</li>
              <li className="text-secondary">Describe your problem in more detail</li>
              <li className="text-secondary">Describe what you tried and what you expected to happen</li>
              <li className="text-secondary">Review your question and post it to the site</li>
            </ul>
          </div>
          <div className="card mt-5 shadow ">
            <div className=" d-flex flex-column align-items-center pt-3">
              <h3>Ask a Public Question</h3>
              <Link to="/home" className="text-decoration-none">
                <h6 className="text-secondary">Go to Question Page</h6>
              </Link>
            </div>
            <form >
              <div className="d-flex flex-column justify-content-start  p-5">
                <input
                  type="text"
                  className="form-control p-3 mb-4"
                  placeholder="Title"
                  Title

                />
                <textarea
                  className="form-control p-3 mb-4"
                  placeholder="Question Description"
                   />
                <div>
                  <button type="submit" className="btn btn-primary action-btn px-5">
                    Post Your Question
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default AskQuestion;
