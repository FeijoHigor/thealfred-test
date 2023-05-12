import { useState } from "react";
import { Filter, ListFiltersContainer, ListFiltersContent, ToggleButton } from "./styles";

import { Favorite } from "../Favorite";
import heroImg from '../../assets/hero.svg'

export function ListFilters() {

    const [isFavorite, setIsFavorite] = useState(false)
    const [isFilterByName, setFilterByName] = useState(false)

    function handleIsFavorite() {
        setIsFavorite(!isFavorite)
    }

    function handleFilterByName() {
        console.log(isFilterByName)
        setFilterByName(!isFilterByName)
    }

    return (
        <ListFiltersContainer>
            <ListFiltersContent>
                <span>Encontrados 20 heróis</span>

                <div className="filters">
                    <Filter>
                        <img src={heroImg} />
                        <span>Ordenar por nome - A/Z</span>
                        <ToggleButton onClick={handleFilterByName}>
                            <input type="checkbox" />
                            <span />
                        </ToggleButton>
                    </Filter>
                    <Filter onClick={handleIsFavorite}>
                        <Favorite isFavorite={isFavorite} />
                        <span>Somente favoritos</span>
                    </Filter>
                </div>
            </ListFiltersContent>
        </ListFiltersContainer>
    )
}