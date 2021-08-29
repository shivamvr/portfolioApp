import React from 'react'
import clock from '../img/clock.svg'
import money from '../img/money.svg'
import teamwork from '../img/teamwork.svg'
import diaphragm from '../img/diaphragm.svg'
import home2 from '../img/home2.png'
import styled from 'styled-components'
import {useScroll} from './useScroll'
import { motion } from 'framer-motion'
import { scrollReveal } from '../animation'
const ServicesSection = () => {
  const [element, controls] = useScroll()
  return (
    <Container variants={scrollReveal} initial='hidden' animate={controls} ref={element} >
      <div className="left-side">
        <Description>
          <h2>
            High <span>quality</span> services.
          </h2>
        </Description>
        <Cards className="cards">
          <div className="card">
            <div className="icon">
              <img src={clock} alt="" />
              <h3>Efficient</h3>
            </div>
            <p>Lorem ipsum dolor sit.</p>
          </div>
          <div className="card">
            <div className="icon">
              <img src={money} alt="" />
              <h3>Affordable</h3>
            </div>
            <p>Lorem ipsum dolor sit.</p>
          </div>
          <div className="card">
            <div className="icon">
              <img src={diaphragm} alt="" />
              <h3>Go Grade Grear</h3>
            </div>
            <p>Lorem ipsum dolor sit.</p>
          </div>
          <div className="card">
            <div className="icon">
              <img src={teamwork} alt="" />
              <h3>Teamwork</h3>
            </div>
            <p>Lorem ipsum dolor sit.</p>
          </div>
        </Cards>
      </div>
      <Image>
        {' '}
        <img src={home2} alt="" />
      </Image>
    </Container>
  )
}
const Container = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  border: solid yellow 5px;
  .left-side {
    border: solid blue 5px;
    display: flex;
    flex-direction: column;
    width: 60%;
    align-items: center;
  }
  @media (max-width: 1070px){
    flex-direction: column;
     .left-side{
       width: 90%;
     }
   }
`
const Description = styled.div`
  width: 80%;
  border: 4px solid green;
  font-size: 160%;
  h2 {
    font-weight: 300;
  }
  span {
    font-weight: bold;
    color: #19c097;
  }
`
const Cards = styled.div`
  width: 80%;
  border: 4px solid pink;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  .card {
    width: 50%;
    border: skyblue solid;
    padding: 1rem 0;
    padding-left: 1rem;
  }
  @media (max-width: 650px){
     font-size: 90%;
   }
`
const Image = styled.div`
  border: 4px solid cyan;
  width: 40%;
  img {
    width: 100%;
    height: 94vh;
    object-fit: cover;
  }
  @media (max-width: 1070px){
    width: 90%;
   }
 
`
export default ServicesSection
