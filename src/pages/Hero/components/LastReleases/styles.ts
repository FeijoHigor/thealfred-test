import styled from 'styled-components'

export const LastReleasesContent = styled.header`
  padding: 1rem 0;
`

export const LastReleasesHeader = styled.header`
  margin: 3rem 0;
  h3 {
    font-size: 1.6rem;
  }
`
export const LastReleasesList = styled.ul`
  max-width: 1120px;
  margin-bottom: 2rem;

  list-style: none;

  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 4rem 2rem;

  @media (max-width: 900px) {
    grid-template-columns: repeat(4, 1fr);
  }

  @media (max-width: 600px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 400px) {
    grid-template-columns: repeat(1, 1fr);
  }
`

export const ComicCard = styled.li`
  width: 1fr;

  img {
    width: 100%;
  }

  span {
    display: flex;
    padding-top: 1rem;
    font-weight: 600;
    font-size: 1.2rem;
  }
`
