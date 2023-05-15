import styled from 'styled-components'

export const HeroesListContainer = styled.div`
  padding: 0 1.5rem;
  padding-bottom: 8rem;
`

export const HeroesListContent = styled.ul`
  width: 100%;
  max-width: 1120px;

  padding: 2rem 0;
  margin: 0 auto;

  list-style: none;

  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 5.5rem 2rem;

  .noHeroes {
    font-size: 1.4rem;
    position: absolute;
    left: 50%;
    transform: translate(-50%, 0);
    font-weight: 600;
  }

  @media (max-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 892px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 604px) {
    grid-template-columns: repeat(1, 1fr);
  }
`
export const HeroesListHeader = styled.header`
  width: 100%;
`
