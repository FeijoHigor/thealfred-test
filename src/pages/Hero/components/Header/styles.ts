import styled from 'styled-components'

export const HeaderContainer = styled.header`
  padding: 2.5rem 2rem;
`

export const HeaderContent = styled.div`
  width: 100%;
  max-width: 1220px;
  margin: 0 auto;
  padding: 0;

  display: flex;
  align-items: center;

  img {
    width: 13rem;
  }

  @media (max-width: 770px) {
    flex-direction: column;
  }
`
