import { createGlobalStyle } from 'styled-components'

interface GlobalStyleProps {
  page: 'home' | 'hero'
}

export const GlobalStyle = createGlobalStyle<GlobalStyleProps>`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    :focus {
        outline: 0;
    }

    body {
        color: ${(props) => props.theme['dark-gray']};
        background-color: ${(props) =>
          props.page === 'home' ? 'white' : props.theme['light-green']};
        -webkit-font-smoothing: antialiased;
        position: relative;
        min-height: 100vh;
    }

    body, input, button {
        font: 400 1rem Work Sans;
    }
`
