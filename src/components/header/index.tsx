import { HeaderContainer, HeaderContent } from "./styles";

import logoImg from '../../assets/logo.svg'

export function Header() {
    return (
        <HeaderContainer>
            <HeaderContent>
                <img src={logoImg}/>

                <h2>EXPLORE O UNIVERSO</h2>
                <p>Mergulhe no domínio deslumbrante de todos os personagens clássicos que você ama - e aqueles que você descobrirá em breve!</p>
            </HeaderContent>
        </HeaderContainer>
    )
}