import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import main from '../assets/main.svg'

const Landing = () => {
  return (
    <Wrapper>
      <div className='info-container'>
        <h2>Трекинг работы</h2>
        <p>
          Отслеживайте прогресс в поиске работы, планируйте собеседования,
          составляйте план.
        </p>
        <Link to='register' className='btn'>
          Вход / Регистрация
        </Link>
      </div>
      <img src={main} alt='illustration' className='main-img' />
    </Wrapper>
  )
}

export default Landing

const Wrapper = styled.div`
  height: 95vh;
  max-width: var(--max-width);
  width: var(--min-width);
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  .info-container {
    line-height: 1.75rem;
    width: 500px;
    margin-right: 5rem;
  }
  .btn {
    cursor: pointer;
    text-decoration: none;
    font-family: 'Ubuntu', sans-serif;
    border: none;
    font-size: 1.25rem;
    border-radius: 5px;
    padding: 0.5rem;
    background: var(--red);
    color: var(--white);
  }
  .btn:hover {
    transition: var(--transition);
    background: var(--dark-red);
  }
  @media screen and (max-width: 900px) {
    .main-img {
      display: none;
    }
  }
`
