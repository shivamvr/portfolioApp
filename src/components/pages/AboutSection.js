import React from 'react'
import home1 from '../../img/home1.png'
function AboutSection() {
  return (
    <div>
      <div className="title">
        <div className="hide">We work to make</div>
        <div className="hide">
          your <span>dreams come</span>
        </div>
        <div className="hide">true.</div>
      </div>
      <p>
        Contact us for any photography or videography ideas you have. We have
        professionals with amazing skills to help you achieve it
      </p>
      <button>Contact us</button>
      <div className="image">
        <img src={home1} alt="" />
      </div>
    </div>
  )
}

export default AboutSection
