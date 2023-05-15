import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/theme/default'
import { BrowserRouter } from 'react-router-dom'
import { Router } from './Router'
import { FavoriteContextProvider } from './contexts/FavoriteContext'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <FavoriteContextProvider>
          <Router />
        </FavoriteContextProvider>
      </BrowserRouter>
    </ThemeProvider>
  )
}
