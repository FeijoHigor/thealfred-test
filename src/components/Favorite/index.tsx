import { AiFillHeart, AiOutlineHeart } from "react-icons/ai"
import { FavoriteContainer } from "./styles"

interface FavoriteProps {
    isFavorite: boolean
}

export function Favorite({ isFavorite }: FavoriteProps) {

    return (
        <FavoriteContainer>
            {
                isFavorite ?
                    <AiFillHeart size={25}/>
                    :
                    <AiOutlineHeart size={25} />
            }
        </FavoriteContainer>
    )
}