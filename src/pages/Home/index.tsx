import { GlobalStyle } from '../../styles/global'
import { Header } from './components/Header'
import { HeroesList } from './components/HeroesList'
import { HomeContainer } from './styles'

export function Home() {
  return (
    <HomeContainer>
      <Header />
      <HeroesList />
      <GlobalStyle page="home" />
    </HomeContainer>
  )
}
