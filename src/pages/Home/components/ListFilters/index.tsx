import {
  Filter,
  ListFiltersContainer,
  ListFiltersContent,
  ToggleButton,
} from './styles'

import { Favorite } from '../../../../components/Favorite'
import heroImg from '../../../../assets/hero.svg'

interface ListFiltersProps {
  handleSetFilters: (type: 'name' | 'favorite') => void
  isFavorite: boolean
  isChecked: boolean
}

export function ListFilters({
  handleSetFilters,
  isFavorite,
  isChecked,
}: ListFiltersProps) {
  return (
    <ListFiltersContainer>
      <ListFiltersContent>
        <span>Encontrados 20 heróis</span>

        <div className="filters">
          <Filter>
            <img src={heroImg} alt="Ícone de herói" />
            <span>Ordenar por nome - A/Z</span>
            <ToggleButton>
              <input
                type="checkbox"
                onChange={() => handleSetFilters('name')}
                checked={isChecked}
              />
              <span />
            </ToggleButton>
          </Filter>
          <Filter onClick={() => handleSetFilters('favorite')}>
            <Favorite size={25} isFavorite={isFavorite} />
            <span>Somente favoritos</span>
          </Filter>
        </div>
      </ListFiltersContent>
    </ListFiltersContainer>
  )
}
