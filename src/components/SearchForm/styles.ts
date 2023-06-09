import styled from 'styled-components'

interface SearchFormContainerProps {
  isFocus: boolean
  page: 'home' | 'hero'
}

export const SearchFormContainer = styled.div<SearchFormContainerProps>`
  z-index: 3;
  width: ${(props) => (props.page === 'hero' ? '40%' : '100%')};
  max-width: ${(props) => (props.page === 'hero' ? '770px' : '100%')};
  height: ${(props) => (props.page === 'hero' ? '2.5rem' : '3.5rem')};
  background-color: ${(props) =>
    props.page === 'hero' ? 'white' : props.theme['light-red']};
  margin: 4rem auto;
  border-radius: ${(props) => (props.isFocus ? ' 2rem 2rem 0 0' : '2rem')};
  padding: 0 1.5rem;

  position: ${(props) => (props.page === 'hero' ? 'absolute' : 'relative')};
  display: flex;
  align-items: center;

  left: 50%;
  transform: translate(-50%, 0);

  @media (max-width: 770px) {
    width: ${(props) => (props.page === 'hero' ? '90%' : '')};
    top: ${(props) => (props.page === 'hero' ? '5rem' : '0')};
  }

  .inputBox {
    gap: 2rem;
    display: flex;
    width: 100%;
    height: 100%;
    align-items: center;

    @media (max-width: 400px) {
      gap: 0.2rem;
    }

    input {
      display: flex;
      border: none;
      background: none;
      flex: 1;
      height: 100%;
      color: ${(props) => props.theme['dark-red']};
      font-size: 1.1rem;

      &::placeholder {
        color: ${(props) => props.theme['dark-red']};
        opacity: 0.7;
        font-weight: 400;
      }
    }

    svg {
      color: ${(props) => props.theme['dark-red']};
    }
  }

  .results {
    width: 100%;
    min-height: 3rem;
    max-height: 20rem;
    border-radius: 0 0 1rem 1rem;

    display: none;
    overflow-y: scroll;

    flex-direction: column;
    padding: 2rem;
    z-index: 1;
    gap: 1.5rem 0;

    position: absolute;
    bottom: 0;
    left: 0;
    transform: translate(0, 100%);

    background-color: ${(props) =>
      props.page === 'home' ? props.theme['light-red'] : 'white'};

    &::-webkit-scrollbar {
      width: 5px;
    }

    &::-webkit-scrollbar-thumb {
      background-color: ${(props) => props.theme['dark-red']};
      border-radius: 20px;
    }

    span {
      font-size: 1.2rem;
      font-weight: 500;
      color: ${(props) => props.theme['medium-gray']};
    }
  }

  .results.focus {
    display: flex;
  }

  @media (max-width: 400px) {
    width: ${(props) => (props.page === 'home' ? '100%' : '90%')};
    height: ${(props) => (props.page === 'home' ? '3rem' : '2.5rem')};
    gap: 0.5rem;
    padding: 0 1rem;
  }
`
export const SearchHeroCard = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  border-radius: 0.5rem;
  position: relative;
  justify-content: space-between;

  a {
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: 1;
  }

  .favoriteButton {
    z-index: 2;
  }

  div {
    display: flex;
    align-items: center;
    gap: 0 1.5rem;

    img {
      width: 5rem;
      max-height: 5rem;
      object-position: center;
      object-fit: cover;
      padding: 0;
      border-radius: 0.5rem;
      background: ${(props) => props.theme['dark-gray']};
    }

    .heroName {
      font-size: 1.2rem;
      color: ${(props) => props.theme['dark-gray']};
    }
  }

  &:hover {
    background-color: #ffc1c1;
  }
`
