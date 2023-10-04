import React from "react";
import Header from "../../components/Header/Header";

import Questions from "../../components/Questions/Questions";

const Home = () => {
  return (
    <>
    <Header />
    <section className="bg-body-tertiary">
      
      <div className="d-flex justify-content-around py-5 ">
        <button className="btn btn-primary action-btn px-5">
          {" "}
          Ask Question
        </button>
        <p className="fw-semibold">
          <span className="text-warning">Welcome, </span> sarry_mern
        </p>
      </div>
      <div className="container">
        <h2 className="pb-3">Questions</h2>
        <Questions/>
        <Questions/>
        <Questions/>
        <Questions/>
        <Questions/>
      </div>
    </section>
    </>
  );
};

export default Home;
