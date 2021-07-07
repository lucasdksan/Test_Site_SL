import styled from 'styled-components';
import { motion } from 'framer-motion';
import theme from '../colors/theme';

export const Container = styled(motion.header)`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    width: 100%;
    height: 80px;
    background-color: ${theme.colors.primay};
    padding: 5px 10px;
    left: 0;
    right: 0;
    top: 0;
`;
export const Menu = styled.nav`
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding: 10px 250px;
    width: 100%;
    height: 100%;
    @media(max-width: 1050px){
        padding: 10px 150px;
    }
    @media(max-width: 768px){
        padding: 10px 100px;
    }
    @media(max-width: 630px){
        padding: 10px 60px;
    }
    @media(max-width: 525px){
        padding: 10px 0px;
    }
`;
export const ButtonMenu = styled.a`
    text-decoration: none;
    color: ${theme.colors.colorIcon};
    text-decoration: none;
    font-family: ${theme.fonts.font1};
    line-height: normal;
    font-size: 18px;
    font-weight: bold;
    -moz-transition: all 0.7s;
    -webkit-transition: all 0.7s;
    transition: all 0.7s;
    &:hover{
        color: ${theme.colors.secondary};
        -moz-transition: all 0.3s;
        -webkit-transition: all 0.3s;
        transition: all 0.3s;
        cursor: pointer;
    }
    @media(max-width: 525px){
        font-size: 14px;
    }
`;