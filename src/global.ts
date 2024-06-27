import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    * {
        padding: 0;
        margin: 0;

        box-sizing: border-box;
    }

    ul {
        list-style: none;
    }

    :focus {
        outline: 0;
    }

    body {
        background: ${(props) => props.theme['gray-900']};
        color: ${(props) => props.theme['gray-300']};

        padding: 1rem;
    }

    body, input, textarea, button {
        font-family: "Roboto", sans-serif;
        font-weight: 400;
        font-size: 1rem;
        -webkit-font-smoking: antialiased;  
    }

    @media (max-width: 768px) {
        html {
            font-size: .70rem;
        }
    }
`
