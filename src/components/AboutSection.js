import React from 'react'
import styled from 'styled-components'
import home1 from '../img/home1.png'
import { motion } from 'framer-motion'
import { pageAnimation, titleAnim } from '../animation'
function AboutSection() {
  return (
    <Container>
      <Title className="title">
        <motion.div variants={pageAnimation} initial="hidden" animate="show">
          <motion.div variants={titleAnim} className="hide">
            We work to make
          </motion.div>
          <motion.div variants={titleAnim} className="hide">
            your <span>dreams come</span>
          </motion.div>
          <motion.div variants={titleAnim} className="hide">
            true.
          </motion.div>
        </motion.div>
        <div className="text">
          <p>
            Contact us for any photography or videography ideas you have. We
            have professionals with amazing skills to help you achieve it
          </p>
        </div>
        <div>
          <button className="btn-contact">Contact us</button>
        </div>
      </Title>
      <div className="image">
        <img src={home1} alt="" />
      </div>
    </Container>
  )
}
const Container = styled.div`
  display: flex;
  border: red solid 5px;
  .image {
    width: 40%;
    border: blue solid 5px;
    img {
      width: 100%;
      height: 94vh;
      object-fit: cover;
    }
  }
`
const Title = styled.div`
  /* padding-left: 1rem; */
  min-height: 94vh;
  width: 60%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: green solid 5px;
  & > div {
    border: purple solid 5px;
    width: 70%;
    font-size: 160%;
    margin: 2rem auto;
  }
  .hide {
    font-size: 145%;
    span {
      color: #19c097;
      font-weight: bold;
    }
  }
  .text {
    font-size: 100%;
  }
  .btn-contact {
    border: 2px solid #19c097;
    color: #fff;
    padding: 0.5rem;
    outline: none;
    background: #1a1a1a;
  }
`

export default AboutSection
