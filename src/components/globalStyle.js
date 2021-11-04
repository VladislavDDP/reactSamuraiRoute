import { createGlobalStyle } from "styled-components"


export const GlobalStyle = createGlobalStyle`
    body {
        background: ${({theme}) => theme.body};
        color: ${({theme}) => theme.fontColor};
        transition: all 0.3s ease-in-out;
    }
`
