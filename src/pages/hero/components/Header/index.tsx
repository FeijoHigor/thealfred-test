import { HeaderContainer, HeaderContent } from './styles'

import logoImg from '../../../../assets/logo.svg'
import { SearchForm } from '../../../../components/SearchForm'
import { Link } from 'react-router-dom'

export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <Link to={'/'}>
          <img src={logoImg} alt="Logo da marvel" />
        </Link>

        <SearchForm page="hero" />
      </HeaderContent>
    </HeaderContainer>
  )
}
