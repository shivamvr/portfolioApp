import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useLocation } from 'react-router'

function Nav() {
  const { pathname } = useLocation()
  return (
    <Navbar>
      <Link className='logo' to="/">Capture</Link>
      <ul>
        <li>
          <Link to="/"> About us</Link>
          <Line
            transition={{ duration: 0.75 }}
            initial={{ width: '0%' }}
            animate={{ width: pathname === '/' ? '80%' : '' }}
          />
        </li>
        <li>
          <Link to="/work"> Our work</Link>
          <Line
            transition={{ duration: 0.75 }}
            initial={{ width: '0%' }}
            animate={{ width: pathname === '/work' ? '80%' : '' }}
          />
        </li>
        <li>
          <Link to="/contact"> About us</Link>
          <Line
            transition={{ duration: 0.75 }}
            initial={{ width: '0%' }}
            animate={{ width: pathname === '/contact' ? '80%' : '' }}
          />
        </li>
      </ul>
    </Navbar>
  )
}
const Navbar = styled.nav`
  position: sticky;
  top: 0;
  z-index: 10;
  width: 100%;
  padding: 0.5rem 2rem;
  display: flex;
  justify-content: space-between;
  border: orange solid 5px;
  font-size: 140%;
  background: #272727;
  ul {
    width: 40%;
    border: 2px solid skyblue;
    list-style: none;
    display: flex;
    justify-content: space-around;
    li {
      position: relative;
      font-size: 70%;
      border: pink solid;
      padding: 0.4rem 0.5rem;
      a {
        text-decoration: none;
        color: #fff;
      }
    }
  }

  a {
    text-decoration: none;
    color: #fff;
  }
  @media (max-width: 650px){
    position: unset;
    .logo{
      margin: auto;
      font-size: 180%;
    }
    ul{
      flex-direction: column;
      li{
        width: fit-content;
        margin: .4rem auto;
      }
    }
   }
`
const Line = styled(motion.div)`
  margin-top: 2px;
  border-radius: 0.5rem;
  height: 0.25rem;
  width: 0%;
  background: #23d997;
  position: absolute;
`

export default Nav
