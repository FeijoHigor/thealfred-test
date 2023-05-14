import { HeaderContainer, HeaderContent } from './styles'

import logoImg from '../../../../assets/logo.svg'
import { SearchForm } from '../../../../components/SearchForm'

export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <img src={logoImg} alt="Logo da marvel" />

        <SearchForm page="hero" />
      </HeaderContent>
    </HeaderContainer>
  )
}
