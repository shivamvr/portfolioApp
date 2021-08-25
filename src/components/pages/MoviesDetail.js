import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { useHistory } from 'react-router-dom'
import { MovieState } from '../../movieState'
import { motion } from "framer-motion"
import { pageAnimation } from '../../animation'

function MoviesDetail() {
  const history = useHistory()
  const url = history.location.pathname
  const [movies, setMovies] = useState(MovieState)
  const [movie, setMovie] = useState(null)
  useEffect(() => {
    const currentMovie = movies.filter((stateMovie) => stateMovie.url === url)
    setMovie(currentMovie[0])
  }, [movies, url])
  return (
    <motion.div variants={pageAnimation} initial='hidden' animate='show' exit='exit'>
      {movie !== null && (
        <Detail>
          <Headline>
            <h2>{movie.title}</h2>
            <img src={movie.mainImg} alt="" />
            <Awards>
              {movie.awards.map((award) => (
                <Award description={award.description} title={award.title} />
              ))}
            </Awards>
            <img className='secondaryImg' src={movie.secondaryImg} alt="" />
          </Headline>
        </Detail>
      )}
    </motion.div>
  )
}
const Detail = styled.div`
  background: pink;
`
const Awards = styled.div`
  margin: 3rem 0;
  display: flex;
  justify-content: space-around;
  background: pink;
  padding: 2rem 5rem;

  .line {
    width: 90%;
    height: 0.25rem;
    background: #12c39a;
    margin-top: 0.5rem;
    margin-bottom: 1rem;
  }
`
const Headline = styled.div`
  background: yellow;
  img {
    width: 100%;
    height: 85vh;
    object-fit: cover;
  }
  .secondaryImg{
      width: 100%;
      height: 100vh;
  }
  h2 {
    font-size: 160%;
    padding: 1rem 2rem;
    border: 5px solid blue;
  }
`
const AwardStyled = styled.div`
  border: 2px solid gray;
  width: 30%;
  padding: 1rem;
  line-height: 1.5;
`
const Award = ({ title, description }) => {
  return (
    <AwardStyled>
      <h3>{title}</h3>
      <div className="line"></div>
      <p>{description}</p>
    </AwardStyled>
  )
}

export default MoviesDetail
