import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
:root{
    --color-primary: #FF577F;
    --color-primary-focus: #FF427F;
    --color-primary-negative: #59323F;
    --color-grey-0: #F8F9FA;
    --color-grey-1: #868E96;
    --color-grey-2: #343B41;
    --color-grey-3: #212529;
    --color-grey-4: #121214;
    --color-success: #3FE864;
    --color-negative: #E83F5B;
    font-size: 60%;
}
        
    @media (min-width: 700px) {
        :root {
            font-size: 62.5%;
        }
    }

    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }

    body, html {
        justify-content: center;
        width: 100vw;
        height: 100vh;
    }

    body {
        background-color: #121214;
        font-size: 1.6rem;
    }

    h1, h2, h3, h4, h5, h6, p, strong, label {
        font-family: 'Inter', sans-serif;
        color: white;
    }
    ul {
        list-style: none;
    }
    button {
        cursor: pointer;
        border: none;
    }





`
