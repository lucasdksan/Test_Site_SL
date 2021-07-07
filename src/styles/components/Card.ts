import styled from 'styled-components';
import { motion } from 'framer-motion';
import theme from '../colors/theme';

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 350px;
    height: 400px;
    padding: 10px 15px;
    margin-right: 7.5px;
    margin-left: 7.5px;
    @media(max-width: 1090px){
        padding: 10px 5px;
    }
    @media(max-width: 915px){
        width: 390px;
        height: 380px;
        padding: 10px 5px;
        margin-right: 3.5px;
        margin-left: 3.5px;
    }
    @media(max-width: 780px){
        padding: 10px 0px;
        margin-right: 3px;
        margin-left: 3px;
    }
    @media(max-width: 640px){
        width: 500px;
        height: 400px;
        padding: 10px 0px;
        margin-right: 20px;
        margin-left: 20px;
    }
`;
export const Image = styled(motion.img)`
    width: 180px;
    height: 160px;
    margin-bottom: 20px;
    @media(max-width: 1090px){
        width: 160px;
        height: 140px;
    }
    @media(max-width: 915px){
        width: 120px;
        height: 110px;
    }
    @media(max-width: 640px){
        width: 180px;
        height: 140px;
    }
`;
export const Txt = styled.h1`
    width: 100%;
    color: ${theme.colors.secondary};
    font-size: 18px;
    font-family: ${theme.fonts.font3}, Times, serif;
    margin-bottom: 8px;
    text-align: center;
    @media(max-width: 1090px){
        font-size: 15px;
        margin-bottom: 6px;
    }
    @media(max-width: 915px){
        font-size: 13px;
        margin-bottom: 6px;
    }
    @media(max-width: 780px){
        font-size: 11px;
        margin-bottom: 4px;
    }
    @media(max-width: 640px){
        font-size: 14px;
        margin-bottom: 4px;
    }
`;