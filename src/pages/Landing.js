import React from 'react'
import styled from 'styled-components'
import main from '../assets/main.svg'

const Landing = () => {
  return (
    <Wrapper>
      <article className='info-container'>
        <h2>Трекинг работы</h2>
        <p>
          Отслеживайте прогресс в поиске работы, планируйте собеседования,
          составляйте план.
        </p>
        <button className='btn'>Вход / Регистрация</button>
      </article>
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
