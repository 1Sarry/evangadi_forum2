import React from 'react'
import { PiUserCircleThin } from "react-icons/pi";
import { LiaAngleRightSolid } from "react-icons/lia";
const Questions = () => {
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
                <div>Saron Meles</div>
              </div>
              <div>
                {/* question */}
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Dolor, rem nam ad earum sequi itaque sed! Dolor libero unde
                  velit.
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