import styled from 'styled-components'

export const FiltersButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 3rem;
  gap: 2rem;

  span {
    font-size: 1.8rem;
    color: ${(props) => props.theme['dark-red']};
  }

  button {
    background: ${(props) => props.theme['light-red']};
    border: 2px solid ${(props) => props.theme['dark-red']};
    height: 3rem;
    width: 3rem;
    border-radius: 7px;
    cursor: pointer;

    svg {
      color: ${(props) => props.theme['dark-red']};
    }

    &:hover {
      opacity: 0.8;
    }
  }
`
