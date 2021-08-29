import React from 'react'
import athlete from '../img/athlete-small.png'
import theracer from '../img/theracer-small.png'
import goodtimes from '../img/goodtimes-small.png'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
// ------------Animation--------
import { motion } from 'framer-motion'
import {
  pageAnimation,
  lineAnim,
  photoAnim,
  slider,
  sliderContainer,
  fade,
} from '../animation'
import { useScroll } from '../components/useScroll'
import ScrollTop from '../components/ScrollTop'

function OurWork() {
  const [element, controls] = useScroll()
  const [element2, controls2] = useScroll()
  return (
    <div>
      {/* -----------Animation-Frames------------ */}
      <motion.div variants={sliderContainer} initial="hidden" animate="show">
        <Frame1 variants={slider} />
        <Frame2 variants={slider} />
        <Frame3 variants={slider} />
        <Frame4 variants={slider} />
      </motion.div>
      <Work
        variants={pageAnimation}
        initial="hidden"
        animate="show"
        exit="exit"
      >
        <Movie>
          <h2>Athlete</h2>
          <motion.div variants={lineAnim} className="line"></motion.div>
          <Link to="/work/the-athlete">
            <motion.img variants={photoAnim} src={athlete} alt="athlete" />
          </Link>
        </Movie>
        <Movie
          variants={fade}
          animate={controls2}
          initial="hidden"
          ref={element2}
        >
          <h2>The racer</h2>
          <motion.div className="line" variants={lineAnim}></motion.div>
          <Link to="/work/the-racer">
            <img src={theracer} alt="theracer" />
          </Link>
        </Movie>
        <Movie
          variants={fade}
          animate={controls}
          initial="hidden"
          ref={element}
        >
          <h2>Good Times</h2>
          <motion.div className="line" variants={lineAnim}></motion.div>
          <Link to="/work/good-times">
            <img src={goodtimes} alt="athlete" />
          </Link>
        </Movie>
      </Work>
    </div>
  )
}
const Work = styled(motion.div)`
  border: red solid 4px;
  min-height: 100vh;
  background: #fff;
  /* overflow: hidden; */
`
const Movie = styled(motion.div)`
  width: 85%;
  margin: 0 auto;
  padding-bottom: 2rem;
  border: green solid 4px;
  text-decoration: none;
  overflow: hidden;
  img {
    margin-top: 1rem;
    width: 100%;
    height: 85vh;
    object-fit: cover;
  }
  h2 {
    font-size: 170%;
    font-weight: 400;
    color: #272727;
    padding: 2rem 0.2rem 0.5rem;
  }
  .line {
    width: 100%;
    height: 0.3rem;
    margin-top: 0.5rem;
    background: #13c396;
  }
`
// -----------Frame-Aniimation--------
const Frame1 = styled(motion.div)`
  position: fixed;
  left: 0;
  top: 10%;
  width: 100%;
  height: 100vh;
  background: #fffebf;
  z-index: 2;
`
const Frame2 = styled(Frame1)`
  background: #ff8b8e;
`
const Frame3 = styled(Frame1)`
  background: #8ed2ff;
`
const Frame4 = styled(Frame1)`
  background: #8effa0;
`

export default OurWork
