import styled from 'styled-components'

export const HeroesListContainer = styled.div`
  padding: 0 1.5rem;
  padding-bottom: 8rem;
`

export const HeroesListContent = styled.ul`
  width: 100%;
  max-width: 1120px;

  padding: 1rem 0;
  margin: 0 auto;

  list-style: none;

  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 4.5rem 2rem;

  @media (max-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 850px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 426px) {
    grid-template-columns: repeat(1, 1fr);
  }
`
export const HeroesListHeader = styled.header`
  width: 100%;
`
