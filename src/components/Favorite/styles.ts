import styled from 'styled-components'

export const FavoriteContainer = styled.div`
  z-index: 2;
  display: flex;
  align-items: center;

  svg {
    color: ${(props) => props.theme['dark-red']};
  }
`
