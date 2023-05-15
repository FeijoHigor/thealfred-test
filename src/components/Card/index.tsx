import { useContext } from 'react'
import { Favorite } from '../Favorite'
import { CardContainer } from './styles'
import { Link } from 'react-router-dom'
import { FavoriteContext } from '../../contexts/FavoriteContext'

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
  const { favoriteHeroesId } = useContext(FavoriteContext)

  return (
    <CardContainer>
      <Link to={`/hero/${hero.id}`}></Link>
      <div className="imageContainer" title={hero.name}>
        <img
          src={`${hero.thumbnail.path}.${hero.thumbnail.extension}`}
          alt={`Imagem do herói ${hero.name}`}
        />
      </div>
      <div className="nameContainer">
        <span title={hero.name}>{hero.name}</span>
      </div>
      <button onClick={() => onFavorite(hero)}>
        <Favorite
          size={30}
          isFavorite={favoriteHeroesId.indexOf(hero.id) !== -1}
        />
      </button>
    </CardContainer>
  )
}
