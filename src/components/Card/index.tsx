import { useState } from 'react'
import { Favorite } from '../Favorite'
import { CardContainer } from './styles'

interface CardProps {
  name: string
  imgUrl: string
  heroId: number
  onFavorite: (heroId: number) => boolean
}

export function Card({ name, imgUrl, heroId, onFavorite }: CardProps) {
  const [isFavorite, setIsFavorite] = useState<boolean>(
    JSON.parse(localStorage.getItem('favoriteList')).indexOf(heroId) !== -1,
  )

  function handleIsFavorite() {
    onFavorite(heroId) ? setIsFavorite(true) : setIsFavorite(false)
  }

  return (
    <CardContainer>
      <div className="imageContainer" title={name}>
        <img src={imgUrl} alt={`Imagem do herói ${name}`} />
        <div></div>
      </div>
      <div className="nameContainer">
        <span title={name}>{name}</span>
      </div>
      <button onClick={handleIsFavorite}>
        <Favorite size={30} isFavorite={isFavorite} />
      </button>
    </CardContainer>
  )
}
