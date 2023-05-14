import { useState } from 'react'
import { Favorite } from '../Favorite'
import { CardContainer } from './styles'

interface HeroInfo {
  thumbnail: {
    path: string
    extension: string
  }
  name: string
  id: number
}

interface CardProps {
  hero: HeroInfo
  onFavorite: (hero: HeroInfo) => boolean | undefined
}

export function Card({ hero, onFavorite }: CardProps) {
  const favoriteHeroesId = JSON.parse(
    localStorage.getItem('favoriteList') || '[]',
  ).map((heroELement: HeroInfo) => {
    return heroELement.id
  })

  const [isFavorite, setIsFavorite] = useState<boolean>(
    favoriteHeroesId.indexOf(hero.id) !== -1,
  )

  function handleIsFavorite() {
    onFavorite(hero) ? setIsFavorite(true) : setIsFavorite(false)
  }

  return (
    <CardContainer>
      <div className="imageContainer" title={hero.name}>
        <img
          src={`${hero.thumbnail.path}.${hero.thumbnail.extension}`}
          alt={`Imagem do herói ${hero.name}`}
        />
        <div></div>
      </div>
      <div className="nameContainer">
        <span title={hero.name}>{hero.name}</span>
      </div>
      <button onClick={handleIsFavorite}>
        <Favorite size={30} isFavorite={isFavorite} />
      </button>
    </CardContainer>
  )
}
