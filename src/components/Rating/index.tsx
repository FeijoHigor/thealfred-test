import { RatingContainer } from './styles'
import { AiOutlineStar, AiFillStar } from 'react-icons/ai'

interface RatingProps {
  rating: number
}

export function Rating({ rating }: RatingProps) {
  const starsCount = ['', '', '', '', '']

  return (
    <RatingContainer>
      {starsCount.map((_, i) =>
        i + 1 <= rating ? (
          <AiFillStar size={20} key={i} />
        ) : (
          <AiOutlineStar size={20} key={i} />
        ),
      )}
    </RatingContainer>
  )
}
