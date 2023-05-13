import { SearchFormContainer } from './styles'
import { RxMagnifyingGlass } from 'react-icons/rx'

interface SearchFormProps {
  page: 'home' | 'hero'
}

export function SearchForm({ page }: SearchFormProps) {
  return (
    <SearchFormContainer>
      <RxMagnifyingGlass size={page === 'home' ? 35 : 20} />
      <input type="text" placeholder="Procure por heróis" />
    </SearchFormContainer>
  )
}
