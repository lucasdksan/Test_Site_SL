import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Container = styled(motion.div)`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    flex: 1;
    height: 100%;
    width: 100%;
`;
export const Content = styled.div`
    display: flex;
    top: 0;
    bottom: 0;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    flex: 1;
    width: 100%;
    height: 100%;
    background-color: #fff;
`;
export const FirstBlock = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 89vh;
    flex-direction: column;
    background-color: #353535;
    padding: 40px 30px;
`;
export const FirstBlockImg = styled(motion.img)`
    width: 250px;
    height: 250px;
    @media(max-width: 768px){
        width: 200px;
        height: 200px;
    }
`;
export const FirstBlocText = styled(motion.h1)`
    font-family: Consolas;
    color: #fff;
    font-size: 25px;
    margin-top: 30px;
    text-align: center;
    @media(max-width: 625px){
        font-size: 20px;
    }
`;
export const SecondBlock = styled(motion.div)`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    padding: 30px 5px;
    width: 100%;
    height: 100vh;
    background-color: #fff;
`;
export const TextAreaSecondBlock = styled.nav`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: row;
    width: 100%;
    height: 40px;
    margin-bottom: 20px;
    padding: 10px 150px;
`;
export const TitleSecondBlock = styled.h1`
    font-size: 35px;
    font-family: Consolas;
    color: #353535;
`;
export const AreaDescriptionSecondBlock = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: space-evenly;
    flex-direction: row;
    width: 100%;
    height: 100%;
    padding: 10px 175px;
`;
export const DescriptionSecondBlock = styled.p`
    text-align: justify;
    font-size: 20px;
    font-family: Arial, Helvetica, sans-serif;
    line-height: 30px;
    flex: 1;
    margin-right: 30px;
`;
export const ThirdBlock = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    padding: 30px 10px;
    width: 100%;
    height: 100vh;
    background-color: #000;
`;
export const TitleThirdBlock = styled.h1`
    font-size: 35px;
    font-family: Consolas;
    color: #fff;
`;
export const AreaDescriptionThirdBlock = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    width: 100%;
    margin-bottom: 30px;
`;
export const Whatsapp = styled.span`
    margin-bottom: 20px;
    width: 250px;
    height: 40px;
`;
export const Button = styled.a`
    text-decoration: none;
    width: 250px;
    height: 40px;
    max-width: 100%;
    -moz-transition: all 0.5s;
    -webkit-transition: all 0.5s;
    transition: all 0.5s;
    transition-property: transform;
    transform: scale(1.3);
    background-color: #353535;
    color: #fff;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    font-family: Arial, Helvetica, sans-serif;
    flex: 1;
    &:hover{
        cursor: pointer;
        -moz-transition: all 0.5s;
        -webkit-transition: all 0.5s;
        transition: all 0.5s;
        transition-property: transform;
        transform: scale(1);
        background-color: #34af23;
        color: #fff;
    }
    @media(max-width: 800px){
        -moz-transition: none;
        -webkit-transition: none;
        transition: none;
        transition-property: none;
        transform: scale(1);
        background-color: #000000;
        &:hover{
            cursor: none;
            -moz-transition: none;
            -webkit-transition: none;
            transition: none;
            transition-property: none;
            transform: none;
            background-color: #000000;
        }
    }
`;
export const FourthBlock = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    padding: 40px 0;
    background-color: #353535;
    border-bottom: solid 1px #fff;
`;
export const TitleFourthBlock = styled.h2`
    font-size: 30px;
    margin-bottom: 80px;
    text-align: center;
    color: #fff;
    @media(max-width: 1100px){
        font-size: 25px;
        margin-bottom: 40px;
    }
    @media(max-width: 768px){
        font-size: 20px;
        margin-bottom: 35px;
    }
`;
export const AreaImage = styled.div`
    display: grid;
    grid-gap: 80px;
    grid-template-rows: 1fr 1fr;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    margin-bottom: 70px;
    padding: 0 10px;
    @media(max-width: 1100px){
        display: grid;
        grid-gap: 60px;
        grid-template-rows: 1fr 1fr 1fr;
        grid-template-columns: 1fr 1fr 1fr;
    }
    @media(max-width: 768px){
        display: grid;
        grid-gap: 40px;
        grid-template-rows: 1fr 1fr 1fr 1fr;
        grid-template-columns: 1fr 1fr;
    }
`;
export const ImagesFourthBlock = styled(motion.img)`
    width: 180px;
    height: 180px;
    @media(max-width: 768px){
        width: 100px;
        height: 100px;
    }
`;