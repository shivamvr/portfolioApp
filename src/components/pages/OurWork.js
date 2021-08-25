import React from 'react'
import athlete from '../../img/athlete-small.png'
import theracer from '../../img/theracer-small.png'
import goodtimes from '../../img/goodtimes-small.png'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
// ------------Animation--------
import { motion} from "framer-motion"
import { pageAnimation } from '../../animation'


function OurWork() {
  return (
    <Work variants={pageAnimation} initial='hidden' animate='show' exit='exit'>
      <Movie>
          <h2>Athlete</h2>
          <div className="line"></div>
        <Link to="/work/the-athlete">
          <img src={athlete} alt="athlete" />
        </Link>
      </Movie>
      <Movie>
          <h2>The racer</h2>
          <div className="line"></div>
        <Link to="/work/the-racer">
          <img src={theracer} alt="theracer" />
        </Link>
      </Movie>
      <Movie>
          <h2>Good Times</h2>
          <div className="line"></div>
        <Link to="/work/good-times">
          <img src={goodtimes} alt="athlete" />
        </Link>
      </Movie>
    </Work>
  )
}
const Work = styled(motion.div)`
  border: red solid 4px;
  height: 100vh;
  /* overflow: hidden; */
`
const Movie = styled.div`
  width: 90%;
  margin: 0 auto;
  padding-bottom: 10rem;
  border: green solid 4px;
  text-decoration: none;
  img {
    margin-top: 1rem;
    width: 100%;
    height: 85vh;
    object-fit: cover;
     }
  h2 {
    font-size: 160%;
    font-weight: 300;
    color: #fff;
   }
  .line {
    width: 100%;
    height: 0.3rem;
    margin-top: 0.5rem;
    background: #fff;
  }
`
export default OurWork
