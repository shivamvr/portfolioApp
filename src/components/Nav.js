import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

function Nav() {
  return (
    <Navbar>
      <Link to="/">Capture</Link>
      <ul>
        <li>
          <Link to="/"> About us</Link>
        </li>
        <li>
          <Link to="/work"> Our work</Link>
        </li>
        <li>
          <Link to="/contact"> About us</Link>
        </li>
      </ul>
    </Navbar>
  )
}
const Navbar = styled.nav`
  width: 96%;
  margin: auto;
  padding: 0.5rem;
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
      font-size: 70%;
      border: pink solid;
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
`

export default Nav
