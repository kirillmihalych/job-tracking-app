import React from 'react'
import error from '../assets/not-found.svg'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Error = () => {
  return (
    <Wrapper>
      <div>
        <img src={error} alt='error' className='error-img' />
        <div className='info-container'>
          <div>
            <h1>Ошибка 404</h1>
            <p className='info-p'>Страница не найдена. Попробуйте снова!</p>
            <Link to='/' className='btn'>
              На главную
            </Link>
          </div>
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  width: var(--min-width);
  max-width: var(--max-width);
  margin: 0 auto;
  height: 95vh;
  display: flex;
  align-items: center;
  justify-content: center;
  .info-container {
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
  }
  .info-p {
    margin-bottom: 2.5rem;
  }
  @media screen and (max-width: 900px) {
    .error-img {
      display: none;
    }
  }
`

export default Error
