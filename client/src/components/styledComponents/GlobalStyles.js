import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
 
    .App-footer{
    margin-top: auto;
    }

    /* Common collors */
    .yellow{
        color: #FFE300
    }

    .light-blue{
        color: #4BD5EE
    }

    .black{
        color: #000
    }

    .white{
        color: #FFF
    }

    
    /* .App-header {
    background-color: #282c34;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: calc(10px + 2vmin);
    color: white;
    } */

`;

export default GlobalStyle;
