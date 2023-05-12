import { Card } from "../../../../components/Card";
import { HeaderContainer } from "../Header/styles";
import { HeroesListContent } from "./styles";


export function HeroesList() {
    return (
        <HeaderContainer>
            <HeroesListContent>
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </HeroesListContent>
        </HeaderContainer>
    )
}   