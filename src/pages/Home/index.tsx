import { Header } from './components/Header'
import { HeroesList } from './components/HeroesList'
import { ListFilters } from './components/ListFilters'
import { HomeContainer } from './styles'

export function Home() {
  return (
    <HomeContainer>
      <Header />
      <ListFilters />
      <HeroesList />
    </HomeContainer>
  )
}
