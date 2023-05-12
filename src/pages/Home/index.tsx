import { Footer } from '../../components/Footer'
import { Header } from './components/Header'
import { HeroesList } from './components/HeroesList'
import { ListFilters } from './components/ListFilters'

export function Home() {
  return (
    <>
      <Header />
      <ListFilters />
      <HeroesList />
      <Footer />
    </>
  )
}
