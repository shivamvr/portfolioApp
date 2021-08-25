import React from 'react'
import styled from 'styled-components'

function FaqSection() {
  return (
    <Faq>
      <h2>
        Any Questions <div>FAQ</div>
      </h2>

      <div className="question">
        <h4>How Do I Start</h4>
        <div className="answer">
          <p>Lorem ipsum dolor sit amet.</p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui,
            cumque.
          </p>
        </div>
      </div>

      <div className="question">
        <h4>Daily Schedule</h4>
        <div className="answer">
          <p>Lorem ipsum dolor sit amet.</p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui,
            cumque.
          </p>
        </div>
      </div>

      <div className="question">
        <h4>Different Payment Method</h4>
        <div className="answer">
          <p>Lorem ipsum dolor sit amet.</p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui,
            cumque.
          </p>
        </div>
      </div>

      <div className="question">
        <h4>What Product Do You Offer</h4>
        <div className="answer">
          <p>Lorem ipsum dolor sit amet.</p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui,
            cumque.
          </p>
        </div>
      </div>
    </Faq>
  )
}
const Faq = styled.div`
  min-height: 94vh;
  display: flex;
  margin: 0 auto;
  width: 100%;
  padding: 1.5rem;
  flex-direction: column;
  border: #fff solid 5px;
  h2 {
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
    &::after {
      content: '';
      width: 80%;
      height: 2px;
      background: #fff;
    }
  }
  .answer {
    padding: 1rem 0.5rem;
    p {
      padding: 1rem 0.5rem;
    }
  }
`
export default FaqSection
