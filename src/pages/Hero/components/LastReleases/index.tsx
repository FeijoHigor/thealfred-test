import {
  ComicCard,
  LastReleasesContent,
  LastReleasesHeader,
  LastReleasesList,
} from './styles'

interface Comic {
  id: number
  title: string
  thumbnail: {
    path: string
    extension: string
  }
}

interface LastReleasesProps {
  lastReleasesArray: Comic[]
}

export function LastReleases({ lastReleasesArray }: LastReleasesProps) {
  return (
    <LastReleasesContent>
      <LastReleasesHeader>
        <h3>Últimos lançamentos</h3>
      </LastReleasesHeader>
      <LastReleasesList>
        {lastReleasesArray.map((comic) => (
          <ComicCard key={comic.id}>
            <img
              src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`}
              alt={`Capa do quadrinho ${comic.title}`}
            />
            <span>{comic.title}</span>
          </ComicCard>
        ))}
      </LastReleasesList>
    </LastReleasesContent>
  )
}
