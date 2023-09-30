import React from "react";
import Header from "../../components/Header/Header";
import {PiUserCircleThin} from 'react-icons/pi'
const Home = () => {
  return (
    <section>
      <Header />
      <div className="d-flex justify-content-around bg-body-tertiary">
        <button className="btn btn-primary action-btn px-5">
          {" "}
          Ask Question
        </button>
        <p className="fw-semibold">
          <span className="text-warning">Welcome, </span> sarry_mern
        </p>
      </div>
      <div className="container">
        <h2>Questions</h2>
        <a href="">
          <hr />
          <div>
            <div>
                <div>
                 {/* ?user/ */}   
                </div>
                <div>
                    {/* question */}
                </div>
            </div>
<div>
    {/* arrow */}
    </div>
          </div>
        </a>
      </div>
    </section>
  );
};

export default Home;
