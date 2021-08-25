import React from 'react'
import AboutUs from './pages/AboutUs'
import OurWork from './pages/OurWork'
import ContactUs from './pages/ContactUs'
import MoviesDetail from './pages/MoviesDetail'
import styled from 'styled-components'
import GlobalStyle from './GlobalStyle'
import Nav from './Nav'
// ----------Animation----------
import { Switch, Route, useLocation} from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'

function App() {
  const location = useLocation()
  return (
    <Container>
      <Nav />
      <GlobalStyle />
      <AnimatePresence exitBeforeEnter >
        <Switch location={location} key={location.pathname}>
          <Route path="/" exact>
            <AboutUs />
          </Route>

          <Route path="/work" exact>
            <OurWork />
          </Route>

          <Route path="/work/:id">
            <MoviesDetail />
          </Route>

          <Route path="/contact">
            <ContactUs />
          </Route>
        </Switch>
      </AnimatePresence>
    </Container>
  )
}
const Container = styled.div`
  color: #fff;
  background: #1a1a1a;
`

export default App
