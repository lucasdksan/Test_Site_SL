import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    body{
        background: #ffffff;
        padding: 0px;
        width: auto;
    }
    body::-webkit-scrollbar{
        width: 10px;
        background-color: #e9ecef;
    }
    body::-webkit-scrollbar-thumb{
        background-color: #000000;
    }
    #root{
        width: 100%;
        height: 100%;
    }
`;