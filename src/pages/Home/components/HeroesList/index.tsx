import { Card } from '../../../../components/Card'
import { HeroesListContent, HeroesListContainer } from './styles'

export function HeroesList() {
  return (
    <HeroesListContainer>
      <HeroesListContent>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </HeroesListContent>
    </HeroesListContainer>
  )
}
