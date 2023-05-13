import { useEffect, useState } from 'react'
import { Card } from '../../../../components/Card'
import {
  HeroesListContent,
  HeroesListContainer,
  HeroesListHeader,
} from './styles'
import { ListFilters } from '../ListFilters'

export function HeroesList() {
  const [orderedByName, setOrderedByName] = useState<boolean>(false)
  const [onlyFavorites, setOnlyFavorites] = useState<boolean>(false)
  const [page, setPage] = useState<number>(1)

  const [heroesList, setHeroesList] = useState([])

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
      orderBy=-name == Z à A
      orderBy=name == A à Z
      limit=20  limite de 20 personagens
      offset=20 primeiro 0, segundo 20, terceiro 40
      nameStartsWith= string digitado, esperar 0.5s para chamar a api e no minimo 3 caracteres
    */

    const data = await response.json()

    setHeroesList(data.data.results)
    console.log(data.data.results, 'novo resultado')
  }

  function handleChangePage(pageNumber: number) {
    setPage(pageNumber)
  }

  useEffect(() => {
    getHeroes()
  }, [orderedByName, page])

  function handleSetFilters(type: 'name' | 'favorite') {
    console.log(`name: ${orderedByName}; favorite: ${onlyFavorites}`)
    setPage(1)
    if (type === 'name') {
      setOrderedByName(!orderedByName)
    } else if (type === 'favorite') {
      setOnlyFavorites(!onlyFavorites)
    }
  }

  return (
    <HeroesListContainer>
      <HeroesListHeader>
        <ListFilters
          handleSetFilters={handleSetFilters}
          isFavorite={onlyFavorites}
          isChecked={orderedByName}
        />
      </HeroesListHeader>
      <HeroesListContent>
        {heroesList.map((element, index) => (
          <Card
            key={element.id}
            name={element.name}
            imgUrl={element.thumbnail.path + '.' + element.thumbnail.extension}
          />
        ))}
      </HeroesListContent>
      <div>
        <button
          disabled={page === 1}
          onClick={() => handleChangePage(page - 1)}
        >
          {page - 1}
        </button>
        <button disabled>{page}</button>
        <button onClick={() => handleChangePage(page + 1)}>{page + 1}</button>
      </div>
    </HeroesListContainer>
  )
}
