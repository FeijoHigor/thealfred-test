import { Header } from './components/Header'
import { HeroPageContainer } from './sytles'
import { GlobalStyle } from '../../styles/global'
import { HeroInfo } from './components/HeroInfo'

export function Hero() {
  return (
    <HeroPageContainer>
      <GlobalStyle page="hero" />
      <Header />
      <HeroInfo />
    </HeroPageContainer>
  )
}
