import { useEffect, useState, useRef } from 'react'
import { Card } from '../../../../components/Card'
import {
  HeroesListContent,
  HeroesListContainer,
  HeroesListHeader,
} from './styles'
import { ListFilters } from '../ListFilters'
import { PaginationButtons } from '../PaginationButton'

interface HeroInfo {
  thumbnail: {
    path: string
    extension: string
  }
  name: string
  id: number
}

export function HeroesList() {
  if (localStorage.getItem('favoriteList') === null) {
    localStorage.setItem('favoriteList', '[]')
  }

  const FiltersRef = useRef<HTMLDivElement>(null)

  const [orderedByName, setOrderedByName] = useState<boolean>(false)
  const [onlyFavorites, setOnlyFavorites] = useState<boolean>(false)

  const [page, setPage] = useState<number>(1)
  const [favorites, setFavorites] = useState<HeroInfo[]>(
    JSON.parse(localStorage.getItem('favoriteList')),
  )

  const [totalHeroes, setTotalHeroes] = useState<number>(0)
  const [heroesList, setHeroesList] = useState<HeroInfo[]>([])

  async function getHeroes() {
    if (onlyFavorites) {
      setHeroesList(favorites)
      setTotalHeroes(favorites.length)
    } else {
      setHeroesList([])
      const marvelApiUrl = `https://gateway.marvel.com/v1/public/characters?ts=${
        import.meta.env.VITE_TIME_STAMP
      }&apikey=${import.meta.env.VITE_PUBLIC_KEY}&hash=${
        import.meta.env.VITE_HASH
      }`
      const apiParams = `&limit=20&offset=${page * 20 - 20}&orderBy=${
        orderedByName ? '-name' : 'name'
      }`

      const response = await fetch(`${marvelApiUrl + apiParams}`)

      const data = await response.json()

      setTotalHeroes(data.data.total)
      setHeroesList(data.data.results)
    }
  }

  function handleIsFavorite(hero: HeroInfo) {
    let favoriteHerosId = []
    favoriteHerosId = favorites.map((heroFavorite) => {
      return heroFavorite.id
    })
    if (favoriteHerosId.indexOf(hero.id) === -1 && favorites.length < 5) {
      setFavorites((prevFavorites) => [...prevFavorites, hero])
      return true
    } else if (favoriteHerosId.indexOf(hero.id) !== -1) {
      const newFavorites = favorites.filter(
        (heroElement) => hero.id !== heroElement.id,
      )
      setFavorites(newFavorites)
      return false
    }
  }

  function handleChangePage(pageNumber: number) {
    window.scrollTo({
      top: FiltersRef.current?.offsetTop,
      behavior: 'smooth',
    })
    setPage(pageNumber)
  }

  function handleSetFilters(type: 'name' | 'favorite') {
    setPage(1)
    type === 'name' && setOrderedByName(!orderedByName)
    type === 'favorite' && setOnlyFavorites(!onlyFavorites)
  }

  async function handleFavoriteListLocalStorage() {
    localStorage.setItem('favoriteList', JSON.stringify(favorites))
  }

  useEffect(() => {
    handleFavoriteListLocalStorage()
    if (onlyFavorites) {
      getHeroes()
    }
  }, [favorites])

  useEffect(() => {
    getHeroes()
  }, [orderedByName, page, onlyFavorites])

  return (
    <HeroesListContainer ref={FiltersRef}>
      <HeroesListHeader>
        <ListFilters
          handleSetFilters={handleSetFilters}
          isFavorite={onlyFavorites}
          isChecked={orderedByName}
          totalHeroes={totalHeroes}
        />
      </HeroesListHeader>
      <HeroesListContent>
        {heroesList?.map((element: HeroInfo) => (
          <Card
            key={element.id}
            hero={{
              id: element.id,
              name: element.name,
              thumbnail: {
                path: element.thumbnail.path,
                extension: element.thumbnail.extension,
              },
            }}
            onFavorite={handleIsFavorite}
          />
        ))}
      </HeroesListContent>
      <PaginationButtons
        currentPage={page}
        onChangePage={handleChangePage}
        totalHeroes={totalHeroes}
      />
    </HeroesListContainer>
  )
}
