import { useEffect, useState, useRef, useCallback, useContext } from 'react'
import { Card } from '../../../../components/Card'
import {
  HeroesListContent,
  HeroesListContainer,
  HeroesListHeader,
} from './styles'
import { ListFilters } from '../ListFilters'
import { PaginationButtons } from '../PaginationButton'
import { FavoriteContext } from '../../../../contexts/FavoriteContext'

interface HeroInfo {
  thumbnail: {
    path: string
    extension: string
  }
  name: string
  id: number
}

export function HeroesList() {
  const { favoriteHeroes, handleIsFavorite } = useContext(FavoriteContext)

  const FiltersRef = useRef<HTMLDivElement>(null)

  const [orderedByName, setOrderedByName] = useState<boolean>(false)
  const [onlyFavorites, setOnlyFavorites] = useState<boolean>(false)
  const [page, setPage] = useState<number>(1)

  const [totalHeroes, setTotalHeroes] = useState<number>(0)
  const [heroesList, setHeroesList] = useState<HeroInfo[]>([])

  const getHeroes = useCallback(async () => {
    if (!onlyFavorites) {
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

      if (data.code === 200) {
        setTotalHeroes(data.data.total)
        setHeroesList(data.data.results)
      } else {
        console.log(data.code, 'putz')
      }
    }
  }, [onlyFavorites, page, orderedByName])

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

  useEffect(() => {
    if (!onlyFavorites) {
      getHeroes()
    }
  }, [getHeroes, onlyFavorites])

  useEffect(() => {
    if (onlyFavorites) {
      setHeroesList(favoriteHeroes)
      setTotalHeroes(favoriteHeroes.length)
    }
  }, [favoriteHeroes, onlyFavorites])

  useEffect(() => {
    getHeroes()
  }, [orderedByName, page, getHeroes])

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
        {heroesList.length > 0 ? (
          heroesList.map((element: HeroInfo) => (
            <Card
              key={element.id}
              hero={element}
              onFavorite={handleIsFavorite}
            />
          ))
        ) : (
          <span className="noHeroes">Nenhum herói encontrado</span>
        )}
      </HeroesListContent>
      <PaginationButtons
        currentPage={page}
        onChangePage={handleChangePage}
        totalHeroes={totalHeroes}
      />
    </HeroesListContainer>
  )
}
