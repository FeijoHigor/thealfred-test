import styled from 'styled-components'

export const HeroInfoContainer = styled.div`
  padding: 0 2rem;
`
export const HeroInfoContent = styled.div`
  max-width: 1220px;
  margin: auto;
`

export const Infos = styled.section`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
`

export const HeroContent = styled.div`
  padding: 1rem 0;

  div {
    margin: 0.5rem 0;
    display: flex;
    align-items: center;
    gap: 1rem;
    .infoAmount {
      font-size: 1.1rem;
      font-weight: 500;
    }
  }
`

export const SpanInfoType = styled.span`
  font-weight: 600;
`

export const HeroRating = styled.div`
  display: flex;
  gap: 1rem;
  margin: 1rem 0;
`

export const LastComic = styled.div`
  display: flex;
  gap: 1rem;
  margin: 1rem 0;
`

export const Main = styled.main`
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 2rem;
  @media (max-width: 850px) {
    display: flex;
    flex-direction: column;
  }
`

export const ImgSection = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 80%;
  }
`

export const Section = styled.section`
  header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media (max-width: 770px) {
      margin-top: 5rem;
    }

    h2 {
      text-transform: uppercase;
      font-size: 2.4rem;
    }
  }

  p {
    font-size: 1.2rem;
    color: ${(props) => props.theme['medium-gray']};
    line-height: 1.5rem;
    padding: 2rem 0;
  }
`

export const BigName = styled.h1`
  color: white;
  opacity: 0.4;
  font-size: 20rem;
  right: 5%;
  top: 15%;
  text-shadow: 0px 3px 7px rgba(209, 238, 206, 0.9);
  position: absolute;
  z-index: -1;
  text-transform: uppercase;

  @media (max-width: 1000px) {
    display: none;
  }
`
