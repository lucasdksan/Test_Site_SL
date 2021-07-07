import { createGlobalStyle } from 'styled-components';
import theme from './colors/theme';

export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    body{
        background: ${theme.colors.secondary};
        padding: 0px;
        width: auto;
    }
    body::-webkit-scrollbar{
        width: 10px;
        background-color: ${theme.colors.colorBackground};
    }
    body::-webkit-scrollbar-thumb{
        background-color: ${theme.colors.primay};
    }
    #root{
        width: 100%;
        height: 100%;
    }
`;