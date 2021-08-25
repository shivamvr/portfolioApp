import React from 'react'
import AboutSection from '../AboutSection'
import ServicesSection from '../ServicesSection'
import FaqSection from '../FaqSection'
// -------------Animation---------
import { motion} from "framer-motion"
import { pageAnimation } from '../../animation'
function AboutUs() {
  return (
    <motion.div variants={pageAnimation} initial='hidden' animate='show' exit='exit'>
      <AboutSection />
      <ServicesSection />
      <FaqSection />
    </motion.div>
  )
}

export default AboutUs
