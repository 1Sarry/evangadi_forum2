import React from 'react'
import { PiUserCircleThin } from "react-icons/pi";
import { LiaAngleRightSolid } from "react-icons/lia";
const Questions = ({firstName, lastName, question }) => {
  return (
    <a className="text-decoration-none text-black" href="#">
          <hr />
          <div className="d-flex justify-content-between align-items-center">
            <div className="d-md-flex align-items-center">
              <div className="user d-flex flex-column align-items-center">
                <div>
                  <PiUserCircleThin color="gray"/>
                </div>
                {/* ?user/ */}
                <div>{firstName} {lastName}</div>
              </div>
              <div>
                {/* question */}
                <p>
                  {question}
                </p>
              </div>
            </div>
            <div>
              <span>
                <LiaAngleRightSolid color="gray"/>
              </span>
              {/* arrow */}
            </div>
          </div>
        </a>
  )
}

export default Questions