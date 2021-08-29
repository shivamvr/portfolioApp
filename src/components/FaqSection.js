import React from 'react'
import styled from 'styled-components'
import Toggle from '../components/Toggle'
import { AnimateSharedLayout } from 'framer-motion'
import {useScroll} from './useScroll'
import { motion } from 'framer-motion'
import { scrollReveal } from '../animation'
  function FaqSection() {
  const [element, controls] = useScroll()
  return (
    <Faq variants={scrollReveal} initial='hidden' animate={controls} ref={element}>
      <h2>
        Any Questions <div>FAQ</div>
      </h2>
      <AnimateSharedLayout>
        <Toggle title={'How Do I Start'}>
          <div className="answer">
            <p>Lorem ipsum dolor sit amet.</p>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui,
              cumque.
            </p>
          </div>
        </Toggle>

        <Toggle title={'Daily Schedule'}>
          <div className="answer">
            <p>Lorem ipsum dolor sit amet.</p>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui,
              cumque.
            </p>
          </div>
        </Toggle>

        <Toggle title={'Different Payment Method'}>
          <div className="answer">
            <p>Lorem ipsum dolor sit amet.</p>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui,
              cumque.
            </p>
          </div>
        </Toggle>

        <Toggle title={'What Product Do You Offer'}>
          <div className="answer">
            <p>Lorem ipsum dolor sit amet.</p>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui,
              cumque.
            </p>
          </div>
        </Toggle>
      </AnimateSharedLayout>
    </Faq>
  )
}
const Faq = styled(motion.div)`
  min-height: 94vh;
  display: flex;
  margin: 0 auto;
  width: 100%;
  padding: 1.5rem;
  flex-direction: column;
  border: #fff solid 5px;
  h2 {
    padding-bottom: 1rem;
    padding-left: 1rem;
    font-size: 210%;
    font-weight: 300;
    div {
      color: #19c097;
      font-weight: bold;
    }
  }

  h4 {
    cursor: pointer;
    margin: 1% 0;
    display: flex;
    flex-direction: column;
    font-size: 160%;
    font-weight: 300;
    padding-left: 1rem;
  }
  .faq-line {
    width: 90%;
    height: 2px;
    background: #fff;
    margin: 1rem 1rem;
  }
  .answer {
    padding: 1rem 0.5rem;
    p {
      padding: 1rem 0.5rem;
      font-size: 120%;
    }
  }
  
  @media (max-width: 970px){
    text-align: center;
   }
`
export default FaqSection
