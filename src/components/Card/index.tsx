import { useState } from 'react'
import { Favorite } from '../Favorite'
import { CardContainer } from './styles'

export function Card() {
  const [isFavorite, setIsFavorite] = useState(false)

  function handleIsFavorite() {
    setIsFavorite(!isFavorite)
  }

  return (
    <CardContainer>
      <div className="imageContainer">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSu08v_06doqCP2RmvB6jZPGGw7sGCtKsgOyA&usqp=CAU"
          alt=""
        />
        <div></div>
      </div>
      <div className="nameContainer">
        <span>Demolidor</span>
        <span onClick={handleIsFavorite}>
          <Favorite size={30} isFavorite={isFavorite} />
        </span>
      </div>
    </CardContainer>
  )
}
