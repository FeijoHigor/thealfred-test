import styled from 'styled-components'

export const FooterContainer = styled.footer`
  background-color: ${(props) => props.theme['dark-red']};
  position: absolute;
  bottom: 0;
  height: 4rem;
  width: 100%;
`

export const FooterContent = styled.div`
  display: flex;
  margin: auto;
  max-width: 1120px;
`
