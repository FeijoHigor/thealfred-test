import { createContext, useState, ReactNode } from 'react'

interface HeroInfo {
  thumbnail: {
    path: string
    extension: string
  }
  name: string
  id: number
}

interface FavoriteContextType {
  favoriteHeroes: HeroInfo[]
  setFavoriteHeroes: (favoritesArray: HeroInfo[]) => void
  handleIsFavorite: (hero: HeroInfo) => boolean | undefined
}

export const FavoriteContext = createContext({} as FavoriteContextType)

interface FavoriteContextProviderProps {
  children: ReactNode
}

export function FavoriteContextProvider({
  children,
}: FavoriteContextProviderProps) {
  const [favoriteHeroes, setFavoriteHeroes] = useState<HeroInfo[]>(
    JSON.parse(localStorage.getItem('favoriteList') || '[]'),
  )

  function handleIsFavorite(hero: HeroInfo) {
    let favoriteHerosId = []
    favoriteHerosId = favoriteHeroes.map((heroFavorite) => {
      return heroFavorite.id
    })
    if (favoriteHerosId.indexOf(hero.id) === -1 && favoriteHeroes.length < 5) {
      setFavoriteHeroes((prevFavorites) => {
        handleFavoriteListLocalStorage([...prevFavorites, hero])
        return [...prevFavorites, hero]
      })
      return true
    } else if (favoriteHerosId.indexOf(hero.id) !== -1) {
      const newFavorites = favoriteHeroes.filter(
        (heroElement) => hero.id !== heroElement.id,
      )
      setFavoriteHeroes(newFavorites)
      handleFavoriteListLocalStorage(newFavorites)
      return false
    }
  }

  const handleFavoriteListLocalStorage = (heroesArray: HeroInfo[]) => {
    localStorage.setItem('favoriteList', JSON.stringify(heroesArray))
  }

  return (
    <FavoriteContext.Provider
      value={{ favoriteHeroes, setFavoriteHeroes, handleIsFavorite }}
    >
      {children}
    </FavoriteContext.Provider>
  )
}
