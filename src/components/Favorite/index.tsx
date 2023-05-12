import { AiFillHeart, AiOutlineHeart } from "react-icons/ai"
import { FavoriteContainer } from "./styles"

interface FavoriteProps {
    isFavorite: boolean
    size: number
}

export function Favorite({ isFavorite, size }: FavoriteProps) {

    return (
        <FavoriteContainer>
            {
                isFavorite ?
                    <AiFillHeart size={size}/>
                    :
                    <AiOutlineHeart size={size} />
            }
        </FavoriteContainer>
    )
}