import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { useHistory } from 'react-router-dom'
import { MovieState } from '../movieState'
import { motion } from 'framer-motion'
import { pageAnimation } from '../animation'
import ScrollTop from '../components/ScrollTop'

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
    <motion.div
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      {movie !== null && (
        <Detail>
          <Headline>
            <h2>{movie.title}</h2>
            <img src={movie.mainImg} alt="" />
            <Awards>
              {movie.awards.map((award, index) => (
                <Award
                  description={award.description}
                  key={index}
                  title={award.title}
                />
              ))}
            </Awards>
            <img className="secondaryImg" src={movie.secondaryImg} alt="" />
          </Headline>
        </Detail>
      )}
      <ScrollTop />
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
  @media (max-width: 1040px) {
    flex-direction: column;
    align-items: center;
  }

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
  .secondaryImg {
    width: 100%;
    height: 100vh;
    padding-bottom: 3rem;
    @media (max-width: 1070px) {
      height: auto;
    }
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
  @media (max-width: 1040px) {
    width: 70%;
    margin-bottom: 2rem;
    font-size: 120%;
  }
  @media (max-width: 650px) {
    width: 80%;
  }
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
