import { useEffect, useState, useRef } from 'react'
import { Card } from '../../../../components/Card'
import {
  HeroesListContent,
  HeroesListContainer,
  HeroesListHeader,
} from './styles'
import { ListFilters } from '../ListFilters'
import { PaginationButtons } from '../PaginationButton'

interface HeroeInfo {
  thumbnail: {
    path: string
    extension: string
  }
  name: string
  id: number
}

export function HeroesList() {
  const FiltersRef = useRef<HTMLDivElement>(null)

  const [orderedByName, setOrderedByName] = useState<boolean>(false)
  const [onlyFavorites, setOnlyFavorites] = useState<boolean>(false)

  const [page, setPage] = useState<number>(1)

  const [totalHeroes, setTotalHeroes] = useState<number>(0)
  const [heroesList, setHeroesList] = useState<HeroeInfo[]>([])

  async function getHeroes() {
    const keys = {
      time_stamp: 1683928003,
      public_key: '49a5aaa364c25ac478f5240183592f49',
      private_key: '13903d42443972ff625a8b2276f7f0e4201568b5',
      hash: 'bfb6aba61568cf5803de3f31802d9bb6',
    }

    const marvelApiUrl = `https://gateway.marvel.com/v1/public/characters?ts=${keys.time_stamp}&apikey=${keys.public_key}&hash=${keys.hash}`
    const apiParams = `&limit=20&offset=${page * 20 - 20}&orderBy=${
      orderedByName ? '-name' : 'name'
    }`

    const response = await fetch(`${marvelApiUrl + apiParams}`)

    /* 
      nameStartsWith= string digitado, esperar 0.5s para chamar a api e no minimo 3 caracteres
    */

    const data = await response.json()

    setTotalHeroes(data.data.total)
    setHeroesList(data.data.results)
    console.log(data, 'novo resultado')
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

  useEffect(() => {
    getHeroes()
  }, [orderedByName, page])

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
        {heroesList?.map((element: HeroeInfo) => (
          <Card
            key={element.id}
            name={element.name}
            imgUrl={element.thumbnail.path + '.' + element.thumbnail.extension}
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
