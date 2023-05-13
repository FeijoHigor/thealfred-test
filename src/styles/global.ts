import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
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
        -webkit-font-smoothing: antialiased;
        position: relative;
        min-height: 100vh;
    }

    body, input, button {
        font: 400 1rem Work Sans;
    }
`
