import { useState } from 'react'
import { Favorite } from '../Favorite'
import { CardContainer } from './styles'

interface CardProps {
  name: string
  imgUrl: string
}

export function Card({ name, imgUrl }: CardProps) {
  const [isFavorite, setIsFavorite] = useState<boolean>(false)

  function handleIsFavorite() {
    setIsFavorite(!isFavorite)
  }

  return (
    <CardContainer>
      <div className="imageContainer" title={name}>
        <img src={imgUrl} alt="" />
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
