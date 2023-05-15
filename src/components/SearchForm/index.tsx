import { SearchFormContainer, SearchHeroCard } from './styles'
import { RxMagnifyingGlass } from 'react-icons/rx'
import {
  ChangeEvent,
  useState,
  useEffect,
  useRef,
  useCallback,
  useContext,
} from 'react'
import { Link } from 'react-router-dom'
import { FavoriteContext } from '../../contexts/FavoriteContext'
import { Favorite } from '../Favorite'

interface HeroInfo {
  thumbnail: {
    path: string
    extension: string
  }
  name: string
  id: number
}

interface SearchFormProps {
  page: 'home' | 'hero'
}

export function SearchForm({ page }: SearchFormProps) {
  const inputRef = useRef(null)
  const { handleIsFavorite, favoriteHeroesId } = useContext(FavoriteContext)

  const [isInputFocus, setIsInputFocus] = useState<boolean>(false)

  const [digit, setDigit] = useState<string>('')
  const [foundHeroes, setFoundHeroes] = useState<HeroInfo[]>([])

  function handleDigit(event: ChangeEvent<HTMLInputElement>) {
    console.log(event.target.value)
    setDigit(event.target.value)
  }

  const handleFoundHeroes = useCallback(
    (heroesList: HeroInfo[]) => {
      setFoundHeroes(heroesList)
    },
    [setFoundHeroes],
  )

  const getDigitedHeroes = useCallback(async () => {
    if (digit.length > 2) {
      const marvelApiUrl = `https://gateway.marvel.com/v1/public/characters?ts=${
        import.meta.env.VITE_TIME_STAMP
      }&apikey=${import.meta.env.VITE_PUBLIC_KEY}&hash=${
        import.meta.env.VITE_HASH
      }`

      const apiParams = `&nameStartsWith=${digit}`

      const response = await fetch(`${marvelApiUrl + apiParams}`)

      const data = await response.json()

      console.log('search', data.data.results)
      handleFoundHeroes(data.data.results)
    }
  }, [digit, handleFoundHeroes])

  function handleClickFavorite(hero: HeroInfo) {
    handleIsFavorite(hero)
  }

  useEffect(() => {
    const debounce = setTimeout(() => {
      setFoundHeroes([])
      getDigitedHeroes()
    }, 500)
    return () => clearInterval(debounce)
  }, [digit, getDigitedHeroes])

  return (
    <>
      <SearchFormContainer isFocus={isInputFocus} page={page}>
        <div className={`inputBox ${isInputFocus && 'focus'}`}>
          <RxMagnifyingGlass size={page === 'home' ? 35 : 20} />
          <input
            ref={inputRef}
            type="text"
            placeholder="Procure por heróis"
            onChange={(event) => handleDigit(event)}
            value={digit}
            onFocus={() => setIsInputFocus(true)}
            onBlur={() => setTimeout(() => setIsInputFocus(false), 500)}
          />
        </div>
        <div className={`results ${isInputFocus && 'focus'}`}>
          <span>
            {foundHeroes.length > 0
              ? `Heróis encontrados`
              : digit.length > 2
              ? 'Nenhum herói encontrado'
              : 'Digite pelo menos 3 caracteres'}
          </span>
          {foundHeroes.length > 0
            ? foundHeroes.map((foundedHero) => (
                <SearchHeroCard key={foundedHero.id}>
                  <div>
                    <Link to={`/hero/${foundedHero.id}`}></Link>
                    <img
                      src={`${foundedHero.thumbnail.path}.${foundedHero.thumbnail.extension}`}
                      alt=""
                    />
                    <span className="heroName">{foundedHero.name}</span>
                  </div>
                  <span
                    className="favoriteButton"
                    onClick={() => handleClickFavorite(foundedHero)}
                  >
                    <Favorite
                      isFavorite={
                        favoriteHeroesId.indexOf(foundedHero.id) !== -1
                      }
                      size={35}
                    />
                  </span>
                </SearchHeroCard>
              ))
            : ''}
        </div>
      </SearchFormContainer>
    </>
  )
}
