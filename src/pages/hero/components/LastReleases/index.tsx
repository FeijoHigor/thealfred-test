import {
  LastReleasesContent,
  LastReleasesHeader,
  LastReleasesList,
} from './styles'

export function LastReleases() {
  return (
    <LastReleasesContent>
      <LastReleasesHeader>
        <h3>Últimos lançamentos</h3>
      </LastReleasesHeader>
      <LastReleasesList>
        <li>
          <img src="" alt="" />
          Image title
        </li>
      </LastReleasesList>
    </LastReleasesContent>
  )
}
