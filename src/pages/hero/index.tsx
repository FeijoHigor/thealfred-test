import { Header } from './components/Header'
import { HeroPageContainer } from './sytles'
import { GlobalStyle } from '../../styles/global'

export function Hero() {
  return (
    <HeroPageContainer>
      <GlobalStyle page="hero" />
      <Header />
    </HeroPageContainer>
  )
}
