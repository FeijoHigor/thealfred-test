import { SearchFormContainer } from "./styles";

import loupImg from '../../assets/loup.svg'

export function SearchForm() {
    return (
        <SearchFormContainer>
            <img src={loupImg} alt="Lupa" />
            <input type="text" placeholder="Procure por heróis"/>
        </SearchFormContainer>
    )
}