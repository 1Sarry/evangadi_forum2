import React, {useState} from "react";
import Header from "../../components/Header/Header";
import bg from "../../assets/bg-svg-f.svg";
import LogIn from "../../components/LogIn/LogIn";
import SingUp from "../../components/SignUp/SingUp";

const LandingLayout = () => {
  const [currentPage, setCurrentPage] = useState('login')
  return (
    <section className="landing-main ">
      <Header />
      <main
        className="landing bg-body-tertiary py-5"
        style={{
          background: `url(${bg})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <section className="container d-md-flex pt-5 gap-5 landing-container pb-5">
          {/* form */}
          {currentPage === 'login' && <LogIn setCurrentPage={setCurrentPage}/>}
          {currentPage === 'signup' && <SingUp setCurrentPage={setCurrentPage} />} 
            
          {/* welcome message */}
          <div className="col d-flex flex-column justify-content-center pt-5">
            <p className="text-warning fw-semibold">About</p>
            <h1 className="fw- bold"  style={{color: '#4B456F'}}>Evangadi Networks Q&A</h1>
            <div className="d-flex flex-column gap-4 fs-5 ">
                <p>No matter what stage of life you are in, whether you’re just starting elementary school or being promoted to CEO of a Fortune 500 company, you have much to offer to those who are trying to follow in your footsteps.</p>
                <p>Wheather you are willing to share your knowledge or you are just looking to meet mentors of your own, please start by joining the network here.</p>
            </div>
            <div>
                <button className="btn btn-warning text-white fw-semibold py-2 px-5 mt-3" style={{background:"#fe8402"}} >HOW IT WORKS</button>
            </div>
          </div>
        </section>
      </main>
    </section>
  );
};

export default LandingLayout;
