import styled from 'styled-components'

export const SearchFormContainer = styled.div`
  width: 90%;
  height: 3.5rem;
  background-color: ${(props) => props.theme['light-red']};
  margin: 4rem auto;
  border-radius: 2rem;
  padding: 0 1.5rem;

  display: flex;
  align-items: center;
  gap: 2rem;

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

  @media (max-width: 400px) {
    width: 100%;
    height: 3rem;
    gap: 0.5rem;
    padding: 0 1rem;
  }
`
