import React from 'react'
import Header from '../Header/Header'
import Questions from './Questions'
import { PiUserCircleThin } from "react-icons/pi";
const AnswerPost = () => {
  return (
    <>
        <Header/>
        <div className='bg-body-tertiary p-5'>
        
            <div className='container pb-5'>
                <div>
                    <h2>Questions</h2>
                    <h5>what's react router</h5>
                    <p className='text-secondary'>how does it work</p>
                </div>
                <hr className='hr-line'/>
                <div>
                  <h2>Answers From The Community</h2>
                </div>
                {/* Answers from users */}
                <div className="d-flex justify-content-between align-items-center">
            <div className="d-md-flex align-items-center">
              <div className="user d-flex flex-column align-items-center">
                <div>
                  <PiUserCircleThin color="gray"/>
                </div>
                
                <div>saron</div>
              </div>
              <div>
                {/* Answer */}
                <p>
                  It is a technology used to develop web apps
                </p>
              </div>
            </div>
            <div>
              {/* <span>
                <LiaAngleRightSolid color="gray"/>
              </span> */}
              {/* arrow */}
            </div>
          </div>
                <hr className='bg-light hr-line pb-5' />
                <div className="card mt-5 py-5 shadow ">
            <div className=" d-flex flex-column align-items-center p-3">
              <h3>Answer the Top Question</h3>
              <h6 className="text-secondary">Go to Question Page</h6>
            </div>
            <form action="">
              <div className="d-flex flex-column justify-content-start  p-3">
                
                <textarea
                  className="form-control  p-3 mb-4"
                  placeholder="Your Answer ..."
                   />
                <div>
                  <button className="btn btn-primary action-btn px-5">
                    Post Your Question
                  </button>
                </div>
              </div>
            </form>
          </div>
            </div>
        </div>
    </>
  )
}

export default AnswerPost