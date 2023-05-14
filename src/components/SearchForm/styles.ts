import styled from 'styled-components'

export const SearchFormContainer = styled.div`
  width: 90%;
  height: 3.5rem;
  background-color: ${(props) => props.theme['light-red']};
  margin: 4rem auto;
  border-radius: ${(props) => (props.isFocus ? ' 2rem 2rem 0 0' : '2rem')};
  padding: 0 1.5rem;

  position: relative;
  display: flex;
  align-items: center;

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

    background-color: ${(props) => props.theme['light-red']};

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
    width: 100%;
    height: 3rem;
    gap: 0.5rem;
    padding: 0 1rem;
  }
`
export const SearchHeroCard = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  border-radius: 0.5rem;

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

  &:hover {
    background-color: #ffc1c1;
  }
`
