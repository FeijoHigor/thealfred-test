import {
  BigName,
  HeroContent,
  HeroInfoContainer,
  HeroInfoContent,
  HeroRating,
  ImgSection,
  Infos,
  LastComic,
  Main,
  Section,
  SpanInfoType,
} from './styles'

import movieIcon from '../../../../assets/movie.svg'
import bookIcon from '../../../../assets/book.svg'
import { Favorite } from '../../../../components/Favorite'
import { LastReleases } from '../LastReleases'
import { useCallback, useState, useEffect, useContext } from 'react'
import { useParams } from 'react-router-dom'
import { Rating } from '../../../../components/Rating'
import { FavoriteContext } from '../../../../contexts/FavoriteContext'

interface Comic {
  id: number
  title: string
  thumbnail: {
    path: string
    extension: string
  }
}

interface HeroDetails {
  id: number
  name: string
  description: string
  comics: number
  movies: number
  rating: number
  lastComic: string
  thumbnail: {
    path: string
    extension: string
  }
  lastReleases: Comic[]
}

function formatDate(unformDate: string) {
  const months = [
    'Jan.',
    'Fev.',
    'Mar.',
    'Abr.',
    'Mai.',
    'Jun.',
    'Jul.',
    'Ago.',
    'Set.',
    'Out.',
    'Nov.',
    'Dez.',
  ]

  const formatedDateArray = [
    unformDate.split('-')[2].slice(0, 2),
    unformDate.split('-')[1],
    unformDate.split('-')[0],
  ]

  const formatedDateString = `${formatedDateArray[0]} ${
    months[Number(formatedDateArray[1]) - 1]
  } ${formatedDateArray[2]} `

  return formatedDateString
}

export function HeroInfo() {
  const { heroId } = useParams()
  const heroDefaultObject = {
    id: Number(heroId),
    name: '',
    description: '',
    comics: 0,
    movies: 0,
    rating: Math.floor(Math.random() * 5 + 1),
    lastComic: '',
    lastReleases: [
      {
        id: 0,
        title: '',
        thumbnail: { path: '', extension: '' },
      },
    ],
    thumbnail: { path: '', extension: '' },
  }

  const { handleIsFavorite, favoriteHeroesId } = useContext(FavoriteContext)

  const [heroDetails, setHeroDetails] = useState<HeroDetails>(heroDefaultObject)

  const getHero = useCallback(async () => {
    const marvelApiUrl = `https://gateway.marvel.com/v1/public/characters/${heroId}?ts=${
      import.meta.env.VITE_TIME_STAMP
    }&apikey=${import.meta.env.VITE_PUBLIC_KEY}&hash=${
      import.meta.env.VITE_HASH
    }`

    const marvelComicsApiUrl = `https://gateway.marvel.com/v1/public/characters/${heroId}/comics?ts=${
      import.meta.env.VITE_TIME_STAMP
    }&apikey=${import.meta.env.VITE_PUBLIC_KEY}&hash=${
      import.meta.env.VITE_HASH
    }&orderBy=-focDate&limit=10`

    const response = await fetch(`${marvelApiUrl}`)
    const comicsResponse = await fetch(`${marvelComicsApiUrl}`)

    const data = await response.json()
    const comicsData = await comicsResponse.json()

    const formatedHero: HeroDetails = {
      id: Number(heroId),
      name: data.data.results[0].name,
      description: data.data.results[0].description,
      comics: data.data.results[0].comics.available,
      movies: data.data.results[0].events.available,
      lastComic:
        formatDate(comicsData.data.results[0].dates[0].date) || 'Sem data',
      thumbnail: {
        path: data.data.results[0].thumbnail.path,
        extension: data.data.results[0].thumbnail.extension,
      },
      lastReleases: comicsData.data.results,
      rating: Math.floor(Math.random() * 5 + 1), // Do not have rating on API (não tem "avaliação" na API)
    }

    setHeroDetails(formatedHero)
    console.log(formatedHero)
  }, [heroId])

  useEffect(() => {
    getHero()
  }, [getHero, heroId])

  return (
    <HeroInfoContainer>
      <BigName>{heroDetails.name.split(' ')[0]}</BigName>
      <HeroInfoContent>
        <Main>
          <Section>
            <header>
              <h2>{heroDetails.name}</h2>
              <span
                onClick={() =>
                  handleIsFavorite({
                    id: heroDetails.id,
                    name: heroDetails.name,
                    thumbnail: heroDetails.thumbnail,
                  })
                }
              >
                <Favorite
                  size={40}
                  isFavorite={favoriteHeroesId.indexOf(heroDetails.id) !== -1}
                />
              </span>
            </header>
            <p>
              {heroDetails.description.length > 0
                ? heroDetails.description
                : 'Sem descrição'}
            </p>
            <Infos>
              <HeroContent>
                <SpanInfoType>Quadrinhos</SpanInfoType>
                <div>
                  <img src={bookIcon} alt="Filmes" />
                  <span className="infoAmount">{heroDetails.comics}</span>
                </div>
              </HeroContent>
              <HeroContent>
                <SpanInfoType>Filmes</SpanInfoType>
                <div>
                  <img src={movieIcon} alt="Filmes" />
                  <span className="infoAmount">{heroDetails.movies}</span>
                </div>
              </HeroContent>
            </Infos>
            <HeroRating>
              <SpanInfoType>Rating: </SpanInfoType>
              <Rating rating={heroDetails.rating} />
            </HeroRating>
            <LastComic>
              <SpanInfoType>Último quadrinho: </SpanInfoType>
              <span>{heroDetails.lastComic}</span>
            </LastComic>
          </Section>
          <ImgSection>
            <img
              src={`${heroDetails.thumbnail.path}.${heroDetails.thumbnail.extension}`}
              alt=""
            />
          </ImgSection>
        </Main>
        <LastReleases lastReleasesArray={heroDetails.lastReleases} />
      </HeroInfoContent>
    </HeroInfoContainer>
  )
}
