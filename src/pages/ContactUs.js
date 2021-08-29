import React from 'react'
import { motion } from 'framer-motion'
import { pageAnimation, titleAnim } from '../animation'
import styled from 'styled-components'

function ContactUs() {
  return (
    <ContactStyle
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
      style={{ background: '#fff' }}
    >
      <Title>
        <Hide>
          <motion.h2 variants={titleAnim}>Get in Touch</motion.h2>
        </Hide>
      </Title>
      <motion.div variants={titleAnim}>
      <Hide>
        <Social variants={titleAnim}>
          <Circle></Circle>
          <h2>Send Us A Message</h2>
        </Social>
      </Hide>
      <Hide>
        <Social variants={titleAnim}>
          <Circle></Circle>
          <h2>Send A Email</h2>
        </Social>
      </Hide>
      <Hide>
        <Social variants={titleAnim}>
          <Circle></Circle>
          <h2>Social Media</h2>
        </Social>
      </Hide>
      </motion.div>
    </ContactStyle>
  )
}

const ContactStyle = styled(motion.div)`
  padding: 2rem 5rem;
  color: #353535;
  min-height: 90vh;
`
const Title = styled.div`
  margin: 4rem;
  color: black;
  h2 {
    font-size: 180%;
  }
`
const Hide = styled.div`
  overflow: hidden;
`
const Circle = styled.div`
  border-radius: 50%;
  width: 3rem;
  height: 3rem;
  background: #353535;
`
const Social = styled(motion.div)`
  display: flex;
  align-items: center;
  h2 {
    font-size: 170%;
    font-weight: 400;
    padding: 1.2rem 1rem;
    color: #353535;
  }
`

export default ContactUs
